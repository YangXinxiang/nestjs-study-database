import {} from "class-validator"
import {PickType} from "@nestjs/mapped-types"
import {CarBaseDto} from "./index"
export class CarCreateDto extends PickType(CarBaseDto, ["color", "gDate"]){}
