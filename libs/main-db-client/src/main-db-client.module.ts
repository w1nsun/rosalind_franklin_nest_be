import { Global, Module } from '@nestjs/common';

import { MainDbClientService } from './main-db-client.service';

@Global()
@Module({
  providers: [MainDbClientService],
  exports: [MainDbClientService],
})
export class MainDbClientModule {}
