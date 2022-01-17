

import {PartialType} from "@nestjs/mapped-types"
import {BaseArticleDto} from "./index"
export class CreateArticleDto extends PartialType(BaseArticleDto) {

}