import {Controller, Post,Body, Get, Param, ParseIntPipe, ParseBoolPipe, Query} from "@nestjs/common";
import {StudentDto, CreateStudentDto, UpdateStudentDto, UpdatesStudentAgeDto, UpdateStudentOther, CreateComplexStuDto} from "./dto";
import {FindOneParams} from "./dto"

@Controller("student")
export class StudentController {
    @Post("create")
    create(@Body() stu:CreateStudentDto){
        console.log(`StudentController.create :: enter, stu = `, stu, "instance of, ", stu instanceof StudentDto , "typeof = ", typeof stu)
        return "create : " + JSON.stringify(stu)
    }

    @Post("update")
    update(@Body() stu:UpdateStudentDto){
        console.log(`StudentController.update :: enter, stu = `, stu)
        return "create : " + JSON.stringify(stu)
    }

    @Post("updateAge")
    updateAge(@Body() stu2: UpdatesStudentAgeDto) {
        console.log(`StudentController.updateAge :: enter, stu = `, stu2)
        return "create : " + JSON.stringify(stu2)
    }

    @Post("updateOmitEmail")
    updateOmitEmail(@Body() stu2: UpdateStudentOther) {
        console.log(`StudentController.updateOmitEmail :: enter, stu = `, stu2)
        return "create : " + JSON.stringify(stu2)
    }

    @Post("updateComplex")
    updateComplex(@Body() stu2:CreateComplexStuDto){
        console.log(`StudentController.updateComplex :: enter, stu = `, stu2)
        return "create : " + JSON.stringify(stu2)
    }

    @Get(":id")
    findOne(
        @Param("id", ParseIntPipe) params:number,
        @Query("sort",ParseBoolPipe) needSort:boolean
    ){
        console.log(`StudentController.findOne :: enter, params = `, params, ", typeof = ", typeof params, ", needSort = ", needSort, "typeof = ", typeof needSort)
        return "hhhh, " + JSON.stringify(params)
    }
}