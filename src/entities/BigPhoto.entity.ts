import {Entity, GeoNearOptions, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity({name:"photo"}) // 用name指定表名字，如果不指定，默认会用类名当表名字去找
export class BigPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({name:"description"})
  desc: string;

  @Column({name:"filename"})
  fn: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}

