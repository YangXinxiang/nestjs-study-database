import {Controller, Get, Post, Param,Body, Inject, Query} from "@nestjs/common";
import {CarCreateDto, CarWheelBaseDto} from "./dto"
import {CarService} from "./car.service"
@Controller("car")
export class CarController {
    @Inject(CarService)
    private readonly cs:CarService;

    // 访问： http://localhost:3000/car/2
    @Get(":id")
    async getOne(@Param("id") id:string){
        console.log("CarController.getOne :: enter, id = ", id)
        return this.cs.getOne(parseInt(id))
    }

    @Post("add")
    async addCar(@Body("car") car:CarCreateDto, @Body("carWheels") carWheels:CarWheelBaseDto[]){
        console.log("CarController.addCar :: enter, car = ", car, ", carWheel = ", carWheels)
        
        return  await this.cs.addCarAndWheel(car, carWheels)
    }
}
