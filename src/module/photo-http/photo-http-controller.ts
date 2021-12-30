import {Controller,Get,Param, Inject} from "@nestjs/common"
import {PhotoHttpService} from "./photo-http-service"
@Controller("photo-http")
export class PhotoHttpController {
    // constructor(private phs: PhotoHttpService){}
    @Inject(PhotoHttpService)
    private phs:PhotoHttpService;
    @Get(":id")
    async findOne(@Param("id") id:string) {
        const rst = await this.phs.findOne(parseInt(id))
        return rst;
    }
}