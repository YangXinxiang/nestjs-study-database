import {Module} from "@nestjs/common"
import {TypeOrmModule} from "@nestjs/typeorm"
import {BigPhoto, Photo, PhotoMetaData, PhotoMetaData2} from "../../entities"
import {PhotoBigService} from "./photo.big.service"
import {PhotoBigController} from "./photo.big.controller"
@Module({
    imports:[
        TypeOrmModule.forFeature([BigPhoto, Photo, PhotoMetaData, PhotoMetaData2])
    ],
    providers:[PhotoBigService],
    controllers: [PhotoBigController]
})
export class PhotoBigModule {

}