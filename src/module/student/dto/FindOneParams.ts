import {IsNumber, IsNumberString} from "class-validator"
export class FindOneParams {
    @IsNumber()
    id:number;
    
}