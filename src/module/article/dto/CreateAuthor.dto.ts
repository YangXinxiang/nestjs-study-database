

import {PartialType} from "@nestjs/mapped-types"
import {BaseAuthorDto} from "./index"
export class CreateAuthorDto extends PartialType(BaseAuthorDto) {

}