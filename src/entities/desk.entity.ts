import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {DLeg} from "./index"
@Entity({name:"desk"})
export class Desk {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"d_name", type:"varchar"})
    name:string;

    @Column({name:"createDate",type:"date"})
    createDate:string

    @Column({name:"d_desc", type:"text"})
    desc:string

    @OneToMany((type)=>DLeg, leg=>leg.desk)
    legs:DLeg[]
}