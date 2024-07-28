import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}
  create(createOrderDto: Order): Promise<Order> {
    return this.orderRepository.save(createOrderDto);
  }

  findAll() {
    return this.orderRepository.find({ relations: ['customer'] });
  }

  findOne(id: number) {
    return this.orderRepository.findOne({
      where: { orderId: id },
      relations: ['customer'],
    });
  }

  update(id: number, updateOrderDto: Order) {
    let orderToBeUpdated = new Order();
    orderToBeUpdated.orderId = id;
    orderToBeUpdated.product = updateOrderDto.product;
    orderToBeUpdated.price = updateOrderDto.price;
    return this.orderRepository.save(orderToBeUpdated);
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }

  getOrdersByCustomerId(cid: number) {
    return this.orderRepository.find({
      where: { customer: { customerId: cid } },
      relations: ['customer'],
    });
  }

  getOrdersByCityName(cname:string){
    return this.orderRepository.find({where:{customer:{city:{name:cname}}},relations:['customer','customer.city']})
  }
  getOrdersByCityid(cid: number) {
    const result = this.orderRepository.find({
      where: { customer: { city: { cityId: cid } } },
      relations: ['customer', 'customer.city'],
    });
    return result;
  }
}
