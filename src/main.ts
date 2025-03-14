import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); //Poner esto como true, permite que las API se puedan consumir desde otros lugares
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
