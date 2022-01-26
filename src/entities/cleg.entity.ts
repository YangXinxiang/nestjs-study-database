import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from "typeorm"
import {CBody} from "./index"

@Entity({name:"c_leg"})
export class CLeg {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: "varchar", name : "c___leg"})
    name:string

    // 一对一和反向关系
    @OneToOne((type)=>CBody, body=>body.leg)
    body: CBody

}