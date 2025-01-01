import { Controller, Get } from '@nestjs/common';

import { AuthRestApiService } from './auth_rest_api.service';

@Controller()
export class AuthRestApiController {
  constructor(private readonly authRestApiService: AuthRestApiService) {}

  @Get()
  getHello(): string {
    return this.authRestApiService.getHello();
  }
}
