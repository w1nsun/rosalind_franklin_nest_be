import { MainDbClientModule } from '@app/main-db-client';
import { AuthModule } from '@domain/auth';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthRestApiController } from './auth_rest_api.controller';
import { AuthRestApiService } from './auth_rest_api.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    MainDbClientModule,
    AuthModule,
  ],
  controllers: [AuthRestApiController],
  providers: [AuthRestApiService],
})
export class AuthRestApiModule {}
