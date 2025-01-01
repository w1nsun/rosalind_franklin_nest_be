import { NestFactory } from '@nestjs/core';
import { AuthRestApiModule } from './auth_rest_api.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthRestApiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
