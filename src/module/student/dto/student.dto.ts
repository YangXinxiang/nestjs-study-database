import {IsEmail, IsNotEmpty, isString} from "class-validator"
export class StudentDto {
   
    @IsEmail()
    email:string

    @IsNotEmpty()
    name:string;
}

/*
export class CreateUserDto {
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    password: string;
  }

  */