import {Controller, Get, Post, Inject, Param, Body } from "@nestjs/common"
import {CreatePhotoDto, CreatePhotoMetadataDto} from "./dto"
import {PhotoBigService} from "./photo.big.service"
@Controller("big-photo")
export class PhotoBigController {
    @Inject(PhotoBigService) 
    private readonly pbs: PhotoBigService;
    @Get(":id")
    async findOne(@Param("id") id: string) {
        const rst = await this.pbs.findOne(parseInt(id));
        return `PhotoBigController.findOne, rst = ` + JSON.stringify(rst)
    }

    @Post("update")
    async update(@Body() data:any) {
        const rst = await this.pbs.update(parseInt(data.id), data.data);
        return "update success"
    }

    @Post("save")
    async save(@Body() data:any){
        const rst = this.pbs.save(parseInt(data.id))
        return "save success"
    }

    @Post("create")
    async create(/*@Body() pd:CreatePhotoDto,@Body() meta:CreatePhotoMetadataDto*/){
        await this.pbs.createPhoto(/*pd, meta*/)
       // return "create success, pd, " + JSON.stringify(pd) + " , meta = "+ JSON.stringify(meta)
    }
}