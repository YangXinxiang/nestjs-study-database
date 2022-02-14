import {Module} from "@nestjs/common";
import {CarController} from "./car.controller";
import {CarService} from "./car.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Car,CarWheel} from "../../entities"
@Module({
    controllers:[CarController],
    providers:[CarService],
    imports:[TypeOrmModule.forFeature([Car,CarWheel])]
})
export class CarModule{

}