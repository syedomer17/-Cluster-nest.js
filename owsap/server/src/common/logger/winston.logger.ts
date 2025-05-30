import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';

export class Logger implements LoggerService {
  private logger = winston.createLogger({
    transports: [new winston.transports.Console()],
  });

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(`${message} - TRACE: ${trace}`);
  }

  warn(message: string) {
    this.logger.warn(message);
  }
}
