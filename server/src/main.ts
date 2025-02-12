import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { METHODS } from 'http';
import * as cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);

  app.use(cors({
    origin:['http://localhost:4200'],
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true

  }));

  await app.listen(3000);
}

bootstrap();
