import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Car} from "./index"
@Entity()
export class CarWheel{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    size:string

    @ManyToOne(
        type=>Car,  // 持有的对象
        car=>car.wheels,  // 反向关系，该车子有哪些轮胎
        {cascade: true} // 存轮胎的时候，自动存所属车子
        )
    car:Car
}