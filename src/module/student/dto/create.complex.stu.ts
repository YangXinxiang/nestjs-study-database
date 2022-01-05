import {CreateStudentDto} from "./create.student.dto"
import {CreateClothesDto} from "./create.cloth.dto"
import {IntersectionType} from "@nestjs/mapped-types"
export class CreateComplexStuDto  extends IntersectionType(CreateStudentDto, CreateClothesDto){}