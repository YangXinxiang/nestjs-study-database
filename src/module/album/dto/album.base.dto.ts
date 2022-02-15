import {IsArray, IsNumber, IsString,} from "class-validator"
export class AlbumBaseDto{
    @IsNumber()
    id:number

    @IsString()
    name:string

    @IsString()
    author:string

    @IsArray()
    pictures: []
}