import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import * as xss from 'xss-clean';
import { Logger } from './common/logger/winston.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: new Logger() });

  app.use(helmet());
  app.use(xss());

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  );

  app.enableCors({
    origin: 'https://your-domain.com',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
