import {IsArray, IsNumber, IsString,} from "class-validator"
export class PictureBaseDto{
    @IsNumber()
    id:number

    @IsString()
    name:string

    @IsString()
    author:string

    @IsArray()
    albums: []
}