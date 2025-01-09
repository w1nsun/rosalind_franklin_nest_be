import { Module } from '@nestjs/common';

import { AuthUsersModule } from './auth-users';

@Module({
  imports: [AuthUsersModule],
  exports: [AuthUsersModule],
})
export class AuthModule {}
