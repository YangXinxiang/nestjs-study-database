import {Controller, Body, Post, Get, Param, Inject} from "@nestjs/common"
import {CBodyService} from "./cbody.service"
import {CLegCreateDto, CBodyCreateDto} from "./dto"
@Controller("cbody")
export class CBodyController {
    @Inject() private readonly cService: CBodyService
    @Get(":id")
    async getOne(@Param("id",) id:string): Promise<any> {
        console.log(`getOne :: enter, id = ${id}`)
        const rst = this.cService.getOne(parseInt(id))
        return rst
    }

    @Post("sssave")
    async save(@Body("leg") legCreateDto: CLegCreateDto, @Body("body") bodyCreateDto: CBodyCreateDto): Promise<string> {
        console.log(`save :: enter, legCreateDto = `, legCreateDto, "bodyCreateDto = ", bodyCreateDto)
        const rst = this.cService.save2(legCreateDto, bodyCreateDto)
        return rst;
    }
}