import {Module} from "@nestjs/common"
import {TypeOrmModule} from "@nestjs/typeorm"
import {Photo} from "../../entities"
import {PhotoController} from "./photo.controller";
import {PhotoService} from "./photo.service"
@Module({
    imports:[TypeOrmModule.forFeature([Photo])],
    providers:[PhotoService],
    controllers : [PhotoController],
    exports: [TypeOrmModule]    
})
export class PhotoModule {

}