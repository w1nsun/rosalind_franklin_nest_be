import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthRestApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
