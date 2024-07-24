import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { CityModule } from './city/city.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [OrderModule, CustomerModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
