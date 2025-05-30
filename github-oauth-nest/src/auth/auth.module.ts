import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { GithubStrategy } from './strategies/github.strategy';
import { JwtModule } from '@nestjs/jwt';
import configFactory from 'src/config/config';

const {JWT_SECRET} = configFactory()

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, GithubStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
