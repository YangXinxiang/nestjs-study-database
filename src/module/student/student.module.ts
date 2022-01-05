import {Module} from "@nestjs/common"
import {StudentController} from "./student.controller"
import {StudentService} from "./student.service"
// 这一个模块主要是练习验证功能： https://docs.nestjs.cn/8/techniques?id=%e9%aa%8c%e8%af%81
@Module({
    
    providers: [StudentService],
    controllers: [StudentController]
})
export class StudentModule {

}