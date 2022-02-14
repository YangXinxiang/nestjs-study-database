import {PickType} from "@nestjs/mapped-types"
import {CarWheelBaseDto} from "./index"
export class CarWheelCreateDto extends PickType(CarWheelBaseDto, ["size"]){

}