import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm"
import {Article} from "../entities"
@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @Column()
    age:number

    @OneToOne((type)=>Article, (article:Article)=>article.authorsss)
    article:Article
}