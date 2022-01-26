import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"
import {CLeg} from "./index"
@Entity({name: "c_body"})
export class CBody {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", name: "b_name"})
    name:string


    @OneToOne((type)=>CLeg, leg=>leg.body, {cascade: true})
    @JoinColumn()
    leg:CLeg
}