import {IsNumber, IsArray, IsString} from "class-validator"
export class CarBaseDto{
    @IsNumber()
    id:number;

    @IsString()
    color:string;


    @IsString()
    gDate:string;

    @IsArray()
    wheels:[]
}
