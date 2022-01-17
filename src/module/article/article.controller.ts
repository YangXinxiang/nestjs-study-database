import {Controller, Get, Post, Param, Body} from "@nestjs/common";
import {ArticleService} from "./article.service"
import {CreateArticleDto,CreateAuthorDto} from "./dto"
@Controller("article")
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}
    @Get("id")
    getArticle(@Param("id") id){
        console.log(`getArticle :: enter, id = ${id}`)
    }

    @Get()
    async getArticleAll(){
        console.log(`getArticleAll :: enter`);
        const rst = await this.articleService.getAll();
        return rst;
    }

    @Post("create")
    create(@Body() art:CreateArticleDto, @Body() author: CreateAuthorDto){
        console.log(`ArticleController.create, `,art, ", ", author)
        this.articleService.create(art, author)
        return "OK"
    }
}