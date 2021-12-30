import {Injectable} from "@nestjs/common"
import {TypeOrmModule, InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"
import {Photo} from "../../entities"
@Injectable()
export class PhotoHttpService {
    @InjectRepository(Photo)
    private photoRepsitory: Repository<Photo>;

    async findOne(id: number):Promise<Photo>{
        return this.photoRepsitory.findOne(id)
    }
}