import {Controller, Get, Post, Param,Body, Inject} from "@nestjs/common";
import {CarCreateDto, CarWheelBaseDto} from "./dto"
import {CarService} from "./car.service"
@Controller("car")
export class CarController {
    @Inject(CarService)
    private readonly cs:CarService;
    @Get(":id")
    async getOne(id:string){
        console.log("CarController.getOne :: enter, id = ", id)
        return "getOne~~~~"
        
    }

    @Post("add")
    async addCar(@Body("car") car:CarCreateDto, @Body("carWheels") carWheels:CarWheelBaseDto[]){
        console.log("CarController.addCar :: enter, car = ", car, ", carWheel = ", carWheels)
        
        return  await this.cs.addCarAndWheel(car, carWheels)
    }
}
