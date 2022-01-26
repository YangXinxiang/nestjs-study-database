import {PickType} from "@nestjs/mapped-types"
import {CLegBaseDto} from "./index"
export class CLegCreateDto extends PickType(CLegBaseDto, ["name"]){}