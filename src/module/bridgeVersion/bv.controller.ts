import {Controller, Get, Param, Inject} from "@nestjs/common"
import {BridgeVersionService} from "./bv.service"
@Controller("bv")
export class BridgeVersionController {
    @Inject(BridgeVersionService)
    private bvs: BridgeVersionService;

    @Get(":id")
    async findOne(@Param("id") id:string) {
        const rst = await this.bvs.findOne(parseInt(id));
        console.log(`BridgeVersionController :: end, id = ${id}, rst = `,rst)
        return rst
    }
}