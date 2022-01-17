import {Module, } from "@nestjs/common"
import {TypeOrmModule} from "@nestjs/typeorm"
import {ArticleController} from "./article.controller"
import {ArticleService} from "./article.service"
import {Author,Article} from "../../entities"
@Module({
    imports:[TypeOrmModule.forFeature([Author,Article])],
    providers:[ArticleService],
    controllers:[ArticleController]
})
export class ArticleMoudle {

}