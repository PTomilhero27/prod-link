import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [ProductsModule, ClientsModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
