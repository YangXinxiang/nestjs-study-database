import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm"
import {Album} from "./index"
@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    author:string

    @ManyToMany(type=>Album, album=>album.pictures)
    albums: Album[]
}