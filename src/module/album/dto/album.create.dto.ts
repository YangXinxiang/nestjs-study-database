import {PickType} from "@nestjs/mapped-types";
import {AlbumBaseDto} from "./index"
export class AlbumCreateDto extends PickType(AlbumBaseDto, ["author", "name", "pictures"]) {}