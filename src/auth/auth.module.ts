/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './jwt-strategy';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      signOptions: { expiresIn: '60s' },
      secret: 'learning-about-nestjs', // process.env.JWT_SECRET
    }),
  ],
  providers: [AuthService, AuthResolver, LocalStrategy, JWTStrategy],
})
export class AuthModule {}
