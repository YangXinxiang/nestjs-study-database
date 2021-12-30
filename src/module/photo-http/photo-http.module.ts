import {Module} from "@nestjs/common"
import {PhotoModule} from "../photos/photo.module"
import {PhotoHttpController} from "./photo-http-controller"
import {PhotoHttpService} from "./photo-http-service"
@Module({
    imports:[PhotoModule],
    providers:[PhotoHttpService],
    controllers:[PhotoHttpController]
})
export class PhotoHttpModule {
    
}