import {Injectable} from "@nestjs/common"
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"
import {BigPhoto, Photo, PhotoMetaData, PhotoMetaData2} from "../../entities"
import {CreatePhotoDto, CreatePhotoMetadataDto} from "./dto/index"
export class PhotoBigService {
    constructor(
        @InjectRepository(BigPhoto) private readonly photoRepository:Repository<BigPhoto>,
        @InjectRepository(Photo) private readonly photoRepositoryN:Repository<Photo>,
        @InjectRepository(PhotoMetaData) private readonly photoMetaDataRepository:Repository<PhotoMetaData>,
        @InjectRepository(PhotoMetaData2) private readonly photoMetaDataRepository2:Repository<PhotoMetaData2>
        ) {
    }

    async findOne(id:number): Promise<BigPhoto>{
        console.log(`PhotoBigService.findOne :: enter, id = ${id}, typeof = ${typeof id}`)
        const rst = await this.photoRepository.findOne(id)
        return rst
    }

    async update(id:number, obj: BigPhoto):Promise<any> {
        console.log(`PhotoBigService.update :: enter, id = ${id}, typeof = ${typeof id}`)
        const rst = await this.photoRepository.update(id,obj)
        return rst;
    }

    async save(id:number, obj?: BigPhoto):Promise<any> {
        const bp: BigPhoto = await this.photoRepository.findOne(id);
        
        bp.desc = "~~~~desc~~~~11"
        this.photoRepository.save(bp)
    }
    async createPhoto(/*p:CreatePhotoDto, meta:CreatePhotoMetadataDto*/){
        console.log(`PhotoBigService.createPhoto :: ennter.`)
        // const rst = await this.photoRepository.create(p); // create是啥作用呢？为啥不行呢？
        
        // const rst = await this.photoRepository.save(p);
        // const rst2 = await this.photoMetaDataRepository.save<CreatePhotoMetadataDto>(meta)
        // const rst3 = await this.photoMetaDataRepository2.create(meta)

        const p1 = new Photo();
        p1.name = "Hardcode1233";
        p1.views=1;
        p1.isPublished = true;
        p1.filename = "hc1233.jpg";
       // p1.desc="ddddeeeessssccc";
        p1.description = "description233";
        console.log(`PhotoBigService.createPhoto :: ennter2222.`)
        const pm2 = new PhotoMetaData();
        pm2.comment = "pm2222222-2222333";
        pm2.compressed = true;
        pm2.height = 10023
        pm2.width = 10123
        console.log(`PhotoBigService.createPhoto :: ennter.33333`)
        pm2.orientation = "orient23"
        
        pm2.photo = p1;
        p1.photo_metadata = pm2;

        console.log(`PhotoBigService.createPhoto :: ennter.44444444`)
        const rst = await this.photoRepositoryN.save(p1);
        console.log(`PhotoBigService.createPhoto :: ennter.555555`)
        const rst2 = await this.photoMetaDataRepository.save(pm2);


        console.log(`PhotoBigService.createPhoto :: end`)
        console.log(rst, rst2)
        
    }


}