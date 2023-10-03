import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
// import cors from 'cors';

async function bootstrap() {
  // Load environment variables from .env file
  dotenv.config();

  const app = await NestFactory.create(AppModule, { cors: false });
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
