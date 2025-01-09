import authUserConfig from '@config/auth-user.config';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthUsersService } from './auth-users.service';
import { UserJwtStrategy } from './user-jwt-strategy';

@Module({
  imports: [
    ConfigModule.forFeature(authUserConfig),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(authUserConfig)],
      inject: [authUserConfig.KEY],
      useFactory: (config: ConfigType<typeof authUserConfig>) => {
        return {
          secret: config.secret,
          signOptions: { expiresIn: config.expiresIn },
        };
      },
    }),
  ],
  providers: [UserJwtStrategy, AuthUsersService],
  exports: [AuthUsersService],
})
export class AuthUsersModule {}
