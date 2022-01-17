import {IsString, IsNumber} from "class-validator"

export class BaseArticleDto {
    @IsNumber()
    id:number;

    @IsString()
    title:string

    @IsString()
    content:string;

    @IsNumber()
    authorsssId:number

}

