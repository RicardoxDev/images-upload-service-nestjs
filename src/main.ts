import { NestFactory } from '@nestjs/core';
import AppModule from './app/app.module';
import { MICRO_SERVICE_OPTIONS } from './micro-service-options.config';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    MICRO_SERVICE_OPTIONS,
  );
  await app.listen();
}
bootstrap();
