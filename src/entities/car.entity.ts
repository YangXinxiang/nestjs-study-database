import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {CarWheel} from "./index";
@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id:number

    @Column({name:"car_color", type:"varchar"})
    color:string

    // 生产日期
    @Column()
    gDate:string

    // 一辆汽车的轮子
    @OneToMany(type=>CarWheel,cw=>cw.car)
    wheels:CarWheel[];

}