import {Entity, PrimaryGeneratedColumn,Column, OneToOne, JoinColumn} from "typeorm"
import {Photo} from "./index"
@Entity({name:"photo_metadata"})
export class PhotoMetaData2 {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    height:number;

    @Column()
    width:number;

    @Column()
    comment: string;

    @Column()
    compressed:boolean

    @Column()
    orientation: string;

    @OneToOne(()=>Photo)
    @JoinColumn()
    photo:Photo;

}