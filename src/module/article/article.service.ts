import {Injectable} from "@nestjs/common";
import {Author,Article} from "../../entities"
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"
import {CreateArticleDto,CreateAuthorDto} from "./dto"
@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Author) private readonly authorRepository:Repository<Author>,
        @InjectRepository(Article) private readonly articleRepository:Repository<Article>,
    ){}

    create(artDto: CreateArticleDto, authorDto:CreateAuthorDto){
        const article:Article = new Article();
        article.title = artDto.title;
        article.content = artDto.content;
        
        const author:Author = new Author();
        author.name = authorDto.name;
        author.age = authorDto.age;

        article.authorsss = author;
        author.article = article;
        this.authorRepository.save(author)
        this.articleRepository.save(article);
    }

    async getAll(){
    //    const rst = await this.articleRepository.find({
    //        relations:["authorsss"]
    //    }) 
    const rst = await this.authorRepository.find({
               relations:["article"]
           }) 
       console.log(`getAll :: end, rst = `, rst)
       return rst
    }

    // 练习使用 queryBuilder
    async getOneByQB(id:number) {
        const rst = await this.articleRepository.createQueryBuilder("user")
            .where("user.id = :id", {id})
            .getOne()
        return rst;
    }
}