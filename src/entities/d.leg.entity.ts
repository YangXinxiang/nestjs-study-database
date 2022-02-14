import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Desk} from "./index";
@Entity({name:"desk_leg"})
export class DLeg {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"desk_name"})
    name:string

    @Column({name:"desk_desc", type:"text"})
    desc:string

    @ManyToOne(type=>Desk, desk=>desk.legs)
    desk:Desk
}