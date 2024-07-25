import { Customer } from "src/customer/entities/customer.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    cityId:number;

    @Column()
    name:string;

    @Column()
    postal:number;

    @OneToMany(()=>Customer,customer=>customer.city)
    customers:Customer[];
}
