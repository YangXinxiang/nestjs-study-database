import {Controller, Get, Param} from "@nestjs/common"
import {PhotoService} from "./photo.service"
@Controller("photo")
export class PhotoController {
    constructor(private service: PhotoService){}
    @Get(":id")
    async findOne(@Param("id") id: string){
        return this.service.findOne(parseInt(id))
    }
}