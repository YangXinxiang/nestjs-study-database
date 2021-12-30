import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity()
export class BridgeVersion {
    @PrimaryGeneratedColumn()
    private id:number;

    @Column()
    private version: string;

    @Column()
    private userId:number;

    @Column() 
    private state:number;

    @Column()
    private createTime: string;

    @Column()
    private updateTime:string;

    @Column() 
    private delete:number;
}