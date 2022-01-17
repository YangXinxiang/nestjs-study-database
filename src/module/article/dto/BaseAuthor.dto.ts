import {IsString, IsNumber} from "class-validator"

export class BaseAuthorDto {
    @IsNumber()
    id:number;

    @IsString()
    name:string

    @IsNumber()
    age:number

}

