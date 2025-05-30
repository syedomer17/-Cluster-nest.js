import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  // Validate or create user based on GitHub data
  async validateUser(userData: any): Promise<UserDocument> {
    let user = await this.userModel.findOne({ githubId: userData.githubId });
    if (!user) {
      user = await this.userModel.create({
        githubId: userData.githubId,
        username: userData.username,
        email: userData.email,
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken,
      });
    } else {
      // Update tokens if changed
      user.accessToken = userData.accessToken;
      user.refreshToken = userData.refreshToken;
      await user.save();
    }
    return user;
  }

  // Generate access and refresh tokens, save refresh token in DB
  async generateTokens(user: UserDocument) {
    const payload = { sub: user._id, username: user.username };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });

    const refreshToken = crypto.randomBytes(40).toString('hex');
    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
  }

  // Refresh tokens given a valid refresh token
  async refreshTokens(refreshToken: string) {
    const user = await this.userModel.findOne({ refreshToken });
    if (!user) {
      throw new Error('Invalid refresh token');
    }
    return this.generateTokens(user);
  }
}
