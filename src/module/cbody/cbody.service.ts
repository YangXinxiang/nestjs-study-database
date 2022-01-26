import {Injectable} from "@nestjs/common"
import {CLegCreateDto, CBodyCreateDto} from "./dto"
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"
import {CBody, CLeg} from "../../entities"
import { options } from "@hapi/joi"

@Injectable()
export class CBodyService {
    @InjectRepository(CBody)
    cbodyRepository:Repository<CBody>;

    @InjectRepository(CLeg)
    clegRepository: Repository<CLeg>;

    async getOne(id:number){
        // 按关系查询出结果
        const rst = await this.cbodyRepository.findOne({ 
                relations: ["leg"],            
                where:{id}
            });
        // 下面这种方式不坑查询出外检leg关联的内容
        // const rst3 =  await this.cbodyRepository.findOne(id)

        // 下面这个呢，能查出很多条：
        // const rst2 = await this.cbodyRepository.find({ relations: ["leg"]}); 
        return rst;
        return `getOne :: id = ${id}`
    }

    async  save(legDto: CLegCreateDto, bodyDto: CBodyCreateDto) {
        const cbody:CBody = new CBody();
        cbody.name = bodyDto.name;

        const cleg:CLeg = new CLeg();
        cleg.name = legDto.name;

        cbody.leg = cleg; // 二者连接起来

        await this.clegRepository.save(cleg)
        await this.cbodyRepository.save(cbody)

        // 开始保存
        return `save :: legDto :: ${JSON.stringify(legDto)}, bodyDto :: ${JSON.stringify(bodyDto)}`;
    }

    async  save2(legDto: CLegCreateDto, bodyDto: CBodyCreateDto) {
        const cbody:CBody = new CBody();
        cbody.name = bodyDto.name;

        const cleg:CLeg = new CLeg();
        cleg.name = legDto.name;

        cbody.leg = cleg; // 二者连接起来

        // await this.clegRepository.save(cleg)
        await this.cbodyRepository.save(cbody)

        // 开始保存
        return `save2 :: legDto :: ${JSON.stringify(legDto)}, bodyDto :: ${JSON.stringify(bodyDto)}`;
    }
}