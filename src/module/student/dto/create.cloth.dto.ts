import {IsString} from "class-validator"
export class CreateClothesDto {
    @IsString()
    clothesColor?:string // 加了上面的校验之后，貌似就变成强制必须这个属性了，哈哈哈哈
}