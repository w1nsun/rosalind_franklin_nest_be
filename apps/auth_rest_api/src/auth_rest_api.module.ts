import { Module } from '@nestjs/common';
import { AuthRestApiController } from './auth_rest_api.controller';
import { AuthRestApiService } from './auth_rest_api.service';

@Module({
  imports: [],
  controllers: [AuthRestApiController],
  providers: [AuthRestApiService],
})
export class AuthRestApiModule {}
