import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"
import {Author} from "../entities"
@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string

    @Column("text")
    content:string

    @OneToOne(()=>Author, author=>author.article)
    @JoinColumn()
    authorsss:Author
}