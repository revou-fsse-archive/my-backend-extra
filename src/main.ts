import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = parseInt(process.env.PORT, 10) || 4000

  const config = new DocumentBuilder()
    .setTitle('Median API')
    .setDescription('The Median API documentation')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors()

  await app.listen(port);

  console.info(`🐱 Nest App running on port :${port}`)
}
bootstrap();
