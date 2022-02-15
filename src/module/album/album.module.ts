import {Module} from "@nestjs/common"
import {TypeOrmModule} from "@nestjs/typeorm"
import {AlbumService} from "./album.service";
import {AlbumController} from "./album.controller";
import {Album, Picture} from "../../entities"
@Module({
    providers:[AlbumService],
    controllers:[AlbumController],
    imports:[
        TypeOrmModule.forFeature([Album, Picture])
    ]
})
export class AlbumModule {}