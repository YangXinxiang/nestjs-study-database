
import {IsNumber, IsBoolean, IsString} from "class-validator"
export class BasePhotoMetaData {
    @IsNumber()
    id:number;

    @IsNumber()
    height:number;

    @IsNumber()
    width:number;

    @IsString()
    comment: string;

    @IsBoolean()
    compressed:boolean

    @IsString()
    orientation: string;
   
    @IsNumber()
    photoId:number;
}