import {IsNumber, IsString} from "class-validator"
export class CLegBaseDto {
    @IsNumber()
    id:number;

    @IsString()
    name:string;
}