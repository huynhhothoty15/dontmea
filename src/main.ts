import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { configSwagger } from './common/configs/swagger.config';

async function bootstrap() {
  // init
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // get environment variables
  const APP_PORT = configService.get<string>('PORT');

  // config
  // global pipe
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // swagger
  configSwagger(app);

  // run server and listen
  await app.listen(APP_PORT);

  // information log
  console.log(
    '\x1b[36m',
    `\nServer listening on: http://localhost:${APP_PORT}\nAPI docs: http://localhost:${APP_PORT}/docs`,
  );
}
bootstrap();
