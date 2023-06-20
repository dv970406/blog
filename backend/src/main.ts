import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    credentials: true,
    origin: [process.env.ENABLE_CORS_ORIGIN1, process.env.ENABLE_CORS_ORIGIN2],
  });
  await app.listen(process.env.PORT);
}
bootstrap();
