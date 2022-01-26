import * as cookieparser from 'cookie-parser';
import * as compression from 'compression';
import { PORT } from '@environments/application';
import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function configureApp(app: INestApplication) {
  app.use(cookieparser());
  app.use(compression());
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
