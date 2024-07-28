import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(@InjectRepository(Customer) private readonly customerRepository:Repository<Customer>){}
  create(createCustomer: CreateCustomerDto) {
    return this.customerRepository.save(createCustomer);
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: number) {
    return this.customerRepository.findOne({where:{customerId:id}});
  }

  update(id: number, updateCustomer: UpdateCustomerDto) {
    let customerTobeUpdated=new CreateCustomerDto();
    customerTobeUpdated.customerId=id;
    customerTobeUpdated.name=updateCustomer.name;
    customerTobeUpdated.email=updateCustomer.email;
    customerTobeUpdated.city=updateCustomer.city;
    return this.customerRepository.save(customerTobeUpdated);
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }
  
  getCustomersByCity(cityname:string){
    return this.customerRepository.find({where:{city:{name:cityname}},relations:['city']});
  }

  // getCustomerByOrderId(orderid:number){
  //   return this.customerRepository.findOne({where:{orders:{orderId:orderid}},relations:['order']});
  // }
}
