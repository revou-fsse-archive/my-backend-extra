import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT, 10) || 4000

  console.info(`🐱 Nest App running on port :${port}`)
  await app.listen(port);
}
bootstrap();
