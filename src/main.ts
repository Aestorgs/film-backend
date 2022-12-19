import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//utiliser le ports 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
