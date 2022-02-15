import {Controller, Get, Param,Post, Body, Inject, Query} from "@nestjs/common"
import {AlbumService} from "./album.service"
import {AlbumCreateDto, PictureCreateDto} from "./dto"
@Controller("album")
export class AlbumController{
    @Inject(AlbumService)
    private readonly albumService:AlbumService;

    // @Get(":id") 用动态路由之后，会导致后续的静态路由无法工作，因为静态路由的名字会被当做动态路由的参数用
    @Get("getAlbum") // 用如下静态路由方式访问： http://localhost:3000/album/getAlbum?id=4
    async getAlbumById(@Query("id") id: string){
        console.log("getAlbumById :: enter, id = ", id)
        const rst = await this.albumService.getAlbumById(parseInt(id))
        return rst
    }

    @Get("getPicture") // 静态路由方式访问和传参： http://localhost:3000/album/getPicture?id=3
    async getPictureById(@Query("id") id: string){
        console.log("getPicture :: enter, id = ", id)
        const rst = await this.albumService.getPictureById(parseInt(id))
        return rst
    }

    @Post("create")
    async create(@Body("album") albumInfo: AlbumCreateDto, @Body("pictures") pics:PictureCreateDto[]){
        const rst = await this.albumService.create(albumInfo, pics);
        return rst
    }
}