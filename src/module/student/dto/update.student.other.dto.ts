import {OmitType} from "@nestjs/mapped-types"
import {CreateStudentDto} from "./create.student.dto"
export class UpdateStudentOther extends OmitType(CreateStudentDto, ["email"] as const) {}