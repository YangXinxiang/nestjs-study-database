import {Controller, Get, Param,Post, Body, Inject} from "@nestjs/common"
import {AlbumService} from "./album.service"
import {AlbumCreateDto, PictureCreateDto} from "./dto"
@Controller("album")
export class AlbumController{
    @Inject(AlbumService)
    private readonly albumService:AlbumService;

    @Get(":id")
    async getOne(@Param("id") id: string){
        const rst = await this.albumService.getOne(parseInt(id))
        return rst
    }

    @Post("create")
    async create(@Body("album") albumInfo: AlbumCreateDto, @Body("pictures") pics:PictureCreateDto[]){
        const rst = await this.albumService.create(albumInfo, pics);
        return rst
    }
}