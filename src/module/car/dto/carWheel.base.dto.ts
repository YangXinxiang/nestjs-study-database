import {IsNumber, IsArray, IsString} from "class-validator"
export class CarWheelBaseDto{
    @IsNumber()
    id:number;

    @IsString()
    size:string;


   
}
