import {Module} from "@nestjs/common"
import {TypeOrmModule} from "@nestjs/typeorm"
import {BridgeVersionService} from "./bv.service"
import {BridgeVersionController} from "./bv.controller"
import {BridgeVersion, Photo} from "../../entities"
@Module({
    // imports:[TypeOrmModule.forFeature([BridgeVersion])],
    providers:[BridgeVersionService],
    controllers: [BridgeVersionController]
    
})
export class BridgeVersionModule {}