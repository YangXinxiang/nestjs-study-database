import {Controller, Get, Post, Param} from "@nestjs/common"
import {UsersService} from "./users.service"
@Controller("user")
export class UsersController {
    constructor(private readonly userService: UsersService){}
    @Get(":id") 
    async findOne(@Param("id") id : string){
        console.log(`Controller.findOne :: enter, id = ${id}, type = ${typeof id}`)
        const rst = await this.userService.findOne(id)
        console.log(`Controller.findOne :: end, `, rst)
        return rst;
    }
}