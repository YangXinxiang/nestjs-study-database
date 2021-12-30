import {Injectable} from "@nestjs/common"
@Injectable()
export class DBConfigService {
    getType(): string{
        return "mysql"
    }
    getUser(): string{
        return "root"
    }
    getPassword():string{
        return "q11111111"
    }
    getDB():string{
        return "nestjs-study"
    }
    getHost():string{
        return "localhost"
    }
    getPort():number{
        return 3306
    }

}
