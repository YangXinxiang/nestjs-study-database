import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import {UsersService} from "./users.service"
import {UsersController} from "./users.controller"

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
    TypeOrmModule.forFeature([User], "default"),
    
    
  ],
  providers : [UsersService],
  controllers : [UsersController],
  exports: [TypeOrmModule],
})
export class UsersModule {}