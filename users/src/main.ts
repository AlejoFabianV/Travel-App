import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const MS = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4000,
      }
    }
  );
  await MS.listen();
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
