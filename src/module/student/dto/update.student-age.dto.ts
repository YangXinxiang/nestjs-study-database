import {PickType} from "@nestjs/mapped-types"
import {CreateStudentDto} from "./create.student.dto"
export class UpdatesStudentAgeDto extends PickType(CreateStudentDto, ["age", "email"] as const){}