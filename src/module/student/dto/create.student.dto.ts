import {IsNumber, IsString, IsEmail} from "class-validator"
export class CreateStudentDto{
    @IsString()
    name:string;

    @IsNumber()
    age:number;

    @IsEmail()
    email:string;
}