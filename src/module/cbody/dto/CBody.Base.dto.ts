import {IsString, IsNumber, IsBoolean} from "class-validator"
export class CBodyBaseDto {
    @IsNumber() 
    id:number;

    @IsString()
    name:string;

    @IsNumber() 
    legId:number;
}