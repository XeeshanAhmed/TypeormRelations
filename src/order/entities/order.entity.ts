import { Customer } from "src/customer/entities/customer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    orderId:number;

    @Column()
    product:string;

    @Column('decimal')
    price:number;

    @ManyToOne(()=>Customer,customer=>customer.orders)
    customer:Customer;

}
