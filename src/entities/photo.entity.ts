import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import {PhotoMetaData} from "./photoMeta.entity"
@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string = "uuuu";

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
  @OneToOne(type => PhotoMetaData, metadata=>metadata.photo)
  photo_metadata:PhotoMetaData
}