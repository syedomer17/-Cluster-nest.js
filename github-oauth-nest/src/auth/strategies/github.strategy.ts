import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.get<string>('app.GITHUB_CLIENT_ID'),
      clientSecret: configService.get<string>('app.GITHUB_CLIENT_SECRET'),
      callbackURL: configService.get<string>('app.GITHUB_CALLBACK_URL'),
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { id, username, emails } = profile;
    const email = emails?.[0]?.value || null;

    return {
      githubId: id,
      username,
      email,
      accessToken,
      refreshToken,
    };
  }
}
