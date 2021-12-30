import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {createConnection} from "typeorm"
import {User,Photo, BridgeVersion} from "./entities"
import {UsersModule} from "./module/users/user.module"
import {PhotoModule} from "./module/photos/photo.module"
import {PhotoHttpModule} from "./module/photo-http/photo-http.module"
import {BridgeVersionModule} from "./module/bridgeVersion/bv.module"
const defaultConfig = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "q11111111",
  database: "nestjs-study",
  entities: [User,Photo],
  synchronize: true
}

@Module({
  imports: [
    
    TypeOrmModule.forRoot(
    // {
    //   ...defaultConfig,
    //   type: "mysql",
    //   entities: [User,Photo],
    //   name:"default"
    // }
    ),
  
  UsersModule,
  PhotoModule,
  PhotoHttpModule,
  //BridgeVersionModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


