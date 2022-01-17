import {IsNumber, IsString, IsBoolean} from "class-validator"
export class BasePhotoDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  desc: string;

  @IsString()
  fn: string;

  @IsNumber()
  views: number;

  @IsBoolean()
  isPublished: boolean;
}