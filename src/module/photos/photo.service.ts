import {Injectable, Get, Param} from "@nestjs/common"
import {InjectRepository, InjectConnection, InjectEntityManager} from "@nestjs/typeorm"
import {Repository, Connection, EntityManager} from "typeorm"
import {Photo} from "../../entities"
@Injectable()
export class PhotoService {
    @InjectRepository(Photo)
    photoRepository:Repository<Photo>;

  
    
    async findOne(id: number): Promise<Photo> {
        return this.photoRepository.findOne(id);
    }
}