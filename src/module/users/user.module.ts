import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import {UsersService} from "./users.service"
import {UsersController} from "./users.controller"
import {ConfigModule} from "@nestjs/config"; //练习使用官方的config
const defaultConfig = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "q11111111",
  database: "nestjs-study",
  entities: [User],
  synchronize: true
}

@Module({
  imports: [
    // ConfigModule.forRoot(), // 如果在跟模块中设置了forRoot({isGlobal:true}) 这里就不用导入模块
    TypeOrmModule.forFeature([User], "default"),
    
    
  ],
  providers : [UsersService],
  controllers : [UsersController],
  exports: [TypeOrmModule],
})
export class UsersModule {}