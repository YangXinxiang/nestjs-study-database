import {Injectable} from "@nestjs/common"
import {InjectRepository, } from "@nestjs/typeorm"
import {getConnection, Repository} from "typeorm"
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

    // 练习通过queryBuilder操作数据库
    async getPictureByIdViaQB(id:number){
        // const rst = await this.pictureRepository
        // .createQueryBuilder("pic")// 别名
        // .where("pic.id = :id", {id})
        // .getOne()
        // return rst

        const rst = await this.pictureRepository
        .createQueryBuilder()// 别名
        .select("pic")
        .from(Picture, "pic")
        .where("pic.id = :id", {id})
        .getOne()
        return rst
    }

    // 练习通过queryBuilder来插入数据
    async insertPictureViaQB(){
        const p1:Picture = new Picture()
        p1.author = "t-author-via-qb-03"
        p1.name = "一张漂亮的照片3";

        const p2:Picture = new Picture()
        p2.author = "t-author-via-qb-04"
        p2.name = "一张漂亮的照片4";
        const rst = await this.pictureRepository
        .createQueryBuilder()
        .insert()
        .into(Picture)
        .values([
            // {author : "t-author-via-qb-01", name:"一张漂亮的照片1"},
            // {author : "t-author-via-qb-02", name:"一张漂亮的照片2"},
            p1,p2
        ])
        .execute()
        return rst;
    }

    // 练习通过queryBuilder来更新数据
    async updatePictureViaQB(id:number) {
        const rst = this.pictureRepository.createQueryBuilder()
        .update(Picture)
        .set({name:"一张漂亮的照片4~~~222"})
        .where("id=:id", {id})
        .execute()
    }

    // 练习通过queryBuilder使用mysql更丰富的功能，使用内置函数
    async getRawOnePicture(id, author="tp-yxx-04") {
        const rst = this.pictureRepository.createQueryBuilder("pic")
        // .select("pic.id as ppid, pic.name as ppname")
        .select("COUNT(pic.author)", "count")
        .where("pic.author = :author", {author})
        .getRawOne()
        return rst;
    }

    // 练习通过queryBuilder使用 where限定语句
    async getRawManyPictures(author="tp-yxx-04") {
        const rst = this.pictureRepository.createQueryBuilder("pic")
        // .select()
        .where("pic.author = :author", {author})
        .getRawMany()
        return rst;
    }

    // 练习通过queryBuilder使用 where限定语句
    async getRawManyPictures2(authors=["tp-yxx-04"]) {
        const rst = this.pictureRepository.createQueryBuilder("pic")
        // .select()
        .where("pic.author IN(:...authors)", {authors})
        .getMany()
        return rst;
    }

    async getRawManyPictures3() {
        const rst = this.pictureRepository.createQueryBuilder("pic")
        // .select()
        .where("pic.author = :author", {author: "tp-yxx-02"})
        .orWhere("pic.author = :author2", {author2: "tp-yxx-04"}) // 注意，同一个语句中，使用相同名字的变量，后面的会覆盖前面的。所以这里要用author2
        .getMany()
        
        return rst;
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