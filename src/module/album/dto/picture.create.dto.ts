import {PickType} from "@nestjs/mapped-types"
import {PictureBaseDto} from "./index"
export class PictureCreateDto extends PickType(PictureBaseDto, ["author", "name", "albums"]) {}
