import {Injectable, Inject} from "@nestjs/common"
import {Repository} from "typeorm"
import {InjectRepository} from "@nestjs/typeorm";
import{Car, CarWheel} from "../../entities"
import {CarCreateDto} from "./dto/car.create.dto"
import {CarWheelCreateDto} from "./dto/carWheel.create.dto"
@Injectable()
export class CarService {
    @InjectRepository(Car)
    carRepository:Repository<Car>;

    @InjectRepository(CarWheel)
    carWheelRepository:Repository<CarWheel>

    // constructor(carRepository:Repository<Car>, carWheelRepository:Repository<CarWheel>){}

    async getOne(id:number){
        // 取出一对多的关系数据，
        const rst = await this.carRepository.findOne({
            relations:["wheels"], // 用relations来指定关系
            where:{id}// 限定查询范围
           
        })
        // const rst = await this.carWheelRepository.findOne({
        //     relations:["car"],
        //     // where:{id}
        // })
        return rst;
    }

    async addCarAndWheel(carInfo:CarCreateDto, wheelsInfo: CarWheelCreateDto[]){
        console.log("CarService.addCarAndWheel, carInfo = ",carInfo, ", wheelsInfo = ", wheelsInfo)
        const car:Car = new Car();
        car.color = carInfo.color;
        car.gDate = carInfo.gDate;
        
        const wheels:CarWheel[] = [];
        for(let i=0; i<wheelsInfo.length; i++){
            const w:CarWheel = new CarWheel();
            w.size = wheelsInfo[i].size;
            w.car = car;
            wheels.push(w)
        }
        
        // await  this.carRepository.save(car);
        await this.carWheelRepository.save(wheels);
        return "addCarAndWheel end"
    }

}
