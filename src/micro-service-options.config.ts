import { Logger } from '@nestjs/common';
import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const MICRO_SERVICE_OPTIONS: MicroserviceOptions &
  NestApplicationContextOptions = {
  transport: Transport.TCP,
  logger: Logger,
  options: {
    port: 3000,
  },
};
