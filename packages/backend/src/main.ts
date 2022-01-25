import { PORT, RATE_LIMIT_MAX } from '@environments/application';
import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { ONE_MINUTE } from './constants/time';

async function configureApp(app: INestApplication) {
  // Basic rate limiter to prevent API abuse and DDOS attacks
  // ? Each IP is allowed to do X requests every minute
  app.use(rateLimit({
    windowMs: ONE_MINUTE,
    max: RATE_LIMIT_MAX,
    message: '⚠️  Too many request created from this IP, please try again after an hour',
  }));
}

async function createApp() {
  const app = await NestFactory.create(AppModule);
  await configureApp(app);
  return app;
}

async function bootstrap() {
  try {
    const app = await createApp();
    await app.listen(PORT);
  } catch (error) {
    Logger.error(error);
    process.exit();
  }
}
bootstrap();
