import {Injectable} from "@nestjs/common"
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"
import {BridgeVersion, Photo} from "../../entities"
@Injectable()
export class BridgeVersionService {
    @InjectRepository(BridgeVersion)
    private bvRepository:Repository<BridgeVersion>

    async findOne(id:number):Promise<BridgeVersion>{
        console.log(`BridgeVersionService.fineOne :: enter, id = ${id}`)
        return this.bvRepository.findOne(id)
    }

}