import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';

// Extend Express Request to include user property injected by Passport
interface RequestWithUser extends Request {
  user: any; // Ideally, replace `any` with a proper User type/interface
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('github')
  @UseGuards(AuthGuard('github'))
  githubLogin() {
    // Initiates GitHub OAuth login flow
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubCallback(@Req() req: RequestWithUser, @Res() res: Response) {
    const user = await this.authService.validateUser(req.user);
    const tokens = await this.authService.generateTokens(user);

    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000, // 15 minutes
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    res.redirect('/'); // Or send a JSON response if you prefer
  }

  @Get('refresh')
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: 'No refresh token' });
    }
    try {
      const tokens = await this.authService.refreshTokens(refreshToken);
      res.cookie('accessToken', tokens.accessToken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      res.cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      return res.json({ message: 'Tokens refreshed' });
    } catch {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }
  }

  @Get('logout')
  logout(@Res() res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return res.json({ message: 'Logged out' });
  }
}
