import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm"
import {CBodyService} from "./cbody.service";
import {CBodyController} from "./cbody.controller";
import {CBody, CLeg} from "../../entities"
@Module({
    imports:[TypeOrmModule.forFeature([CBody, CLeg])],
    providers:[CBodyService],
    controllers:[CBodyController],
    exports:[CBodyModule]
})
export class CBodyModule {

}