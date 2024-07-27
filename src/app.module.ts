import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { CityModule } from './city/city.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order/entities/order.entity';
import { Customer } from './customer/entities/customer.entity';
import { City } from './city/entities/city.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'YOUR_PASSWORD',      //replace this string with your actual postgres server password
      database: 'YOUR_DATABASENAME',  //replace this string with your actual postgres database name
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      logging:true,
    }),
    OrderModule, CustomerModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
