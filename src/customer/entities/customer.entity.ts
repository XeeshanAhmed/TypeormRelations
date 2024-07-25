import { City } from "src/city/entities/city.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    customerId:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @OneToMany(()=>Order,order=>order.customer)
    orders:Order[];

    @ManyToOne(()=>City,city=>city.customers)
    city:City;

}
