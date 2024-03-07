import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config: any = new DocumentBuilder()
    .setTitle('Exemplo API')
    .setDescription('A descrição da API')
    .setVersion('1.0')
    .addTag('exemplo');

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);
  console.log('http://127.0.0.1:3000/api');
}
bootstrap();
