import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable} from "typeorm"
import {Picture} from "./index"
@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    author:string

    @ManyToMany(type=>Picture, pic=>pic.albums)
    @JoinTable()
    pictures: Picture[]
}

// @Entity()
// export class Album {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name: string;

//     @ManyToMany((type) => Photo, (photo) => photo.albums)
//     @JoinTable()
//     photos: Photo[];
// }