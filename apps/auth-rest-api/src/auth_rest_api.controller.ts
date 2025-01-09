import { MainDbClientService } from '@app/main-db-client';
import { AuthUsersService } from '@domain/auth';
import { UserJwtAuthGuard } from '@domain/auth/auth-users/user-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';

import { AuthRestApiService } from './auth_rest_api.service';

@Controller()
export class AuthRestApiController {
  constructor(
    private readonly authRestApiService: AuthRestApiService,
    private readonly mainDbClientService: MainDbClientService,
    private readonly authUsersService: AuthUsersService,
  ) {}

  @UseGuards(UserJwtAuthGuard)
  @Get()
  getHello(): string {
    return this.authRestApiService.getHello();
  }

  @Get('/token')
  async getToken() {
    return await this.authUsersService.login();
  }
}
