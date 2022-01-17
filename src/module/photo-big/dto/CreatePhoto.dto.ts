import {BasePhotoDto} from "./index"
import {PartialType, PickType} from "@nestjs/mapped-types"
export class CreatePhotoDto extends PickType(BasePhotoDto, ["name", "desc", "fn", "isPublished", "views"]){}