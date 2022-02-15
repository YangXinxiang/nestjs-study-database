import {Injectable} from "@nestjs/common"
import {InjectRepository, } from "@nestjs/typeorm"
import {Repository} from "typeorm"
import {Album, Picture} from "../../entities"
import {AlbumCreateDto, PictureCreateDto} from "./dto"
@Injectable()
export class AlbumService{

    @InjectRepository(Album)
    albumRepository:Repository<Album>;

    @InjectRepository(Picture)
    pictureRepository:Repository<Picture>;

    async getAlbumById( id: number){
        const rst = this.albumRepository.findOne(id, {relations:["pictures"]})
        return rst 
    }

    async getPictureById(id:number) {
        const rst = this.pictureRepository.findOne(id, {relations:["albums"]})
        return rst 
    }
    
    async create(albumInfo: AlbumCreateDto,  picInfoes:PictureCreateDto[]){
        console.log("AlbumService.create :: enter, ", albumInfo, "picInfoes", picInfoes)
        const album:Album = new Album();
        album.name = albumInfo.name
        album.author = albumInfo.author;
        album.pictures = albumInfo.pictures;

        const pics:Picture[] = [];
        for(const info of picInfoes){
            const pic:Picture = new Picture();
            pic.name = info.name;
            pic.author = info.author;
            pic.albums = [album]
            // 注意哈，别忘了添加到数组中统一存储，也可以单个存储。
            pics.push(pic)
        }
        await this.albumRepository.save(album);
        await this.pictureRepository.save(pics);
        return "AlbumService.create :: success";
    }
}