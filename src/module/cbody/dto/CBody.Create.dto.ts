import {IsNumber, IsString} from "class-validator"
import {PartialType, PickType} from "@nestjs/mapped-types"
import {CBodyBaseDto} from "./index"
export class CBodyCreateDto extends PickType(CBodyBaseDto, ["name"]) {}
