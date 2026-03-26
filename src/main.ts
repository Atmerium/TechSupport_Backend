import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import path from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  //This is unneccesary
  app.useStaticAssets(path.join(__dirname, '..', '..', 'public'));
  app.setBaseViewsDir(path.join(__dirname, '..', '..', 'views'));

  //This one too
  app.setViewEngine('ejs');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true
  }));

  const config = new DocumentBuilder()
  .setTitle("TechSupport Backend API")
  .setDescription("TechSupport backend NestJS + Prisma + Swagger")
  .setVersion("1.0.1")
  .addTag("Márka")
  .addTag("Alkatrész")
  .addTag("Felhasználó")
  .addTag("Autentikáció")
  .addTag("Összeállítás")
  .addTag("Komment")
  .addBearerAuth()
  .build()

  const document = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
