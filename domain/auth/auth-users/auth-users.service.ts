import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUsersService {
  constructor(private readonly jwtService: JwtService) {}

  async login() {
    const userId = '123456';
    const payload = {
      sub: userId,
    };

    return await this.jwtService.signAsync(payload);
  }
}
