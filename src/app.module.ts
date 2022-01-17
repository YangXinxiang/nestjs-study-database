import { Module,ValidationPipe} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {createConnection} from "typeorm"
import {User,Photo, BridgeVersion} from "./entities"
import {UsersModule} from "./module/users/user.module"
import {PhotoModule} from "./module/photos/photo.module"
import {PhotoHttpModule} from "./module/photo-http/photo-http.module"
import {BridgeVersionModule} from "./module/bridgeVersion/bv.module"
import {DBConfigModule} from "./module/config/db.config.module"
import {DBConfigService} from "./module/config/db.config.service"
import {ConfigModule} from "@nestjs/config";
import {StudentModule} from "./module/student/student.module"
import configuration from "./config/configuration"
import {PhotoBigModule} from "./module/photo-big/photo.big.module"
import {ArticleMoudle} from "./module/article/article.module"
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
    ConfigModule.forRoot({
      envFilePath:[".env", "./src/config/.http.env"],
      isGlobal:true,
      load:[configuration],
      // ignoreEnvFile:true,
    }), // 注册使用官方的ConfigModule
    
    //TypeOrmModule.forRoot(
    // {
    //   ...defaultConfig,
    //   type: "mysql",
    //   entities: [User,Photo],
    //   name:"default"
    // }
    //),
    TypeOrmModule.forRootAsync({
      useFactory: (dbConfigService: DBConfigService)=>({
        type: 'mysql', // 哈哈，不能支持普通字符串，必须是一些明确的类型。
        host: dbConfigService.getHost(),
        port: dbConfigService.getPort(),
        username: dbConfigService.getUser(),
        password: dbConfigService.getPassword(),
        database: dbConfigService.getDB(),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
      }),
      imports :[DBConfigModule],
      inject: [DBConfigService],
    }),
  
  UsersModule,
  PhotoModule,
  PhotoBigModule,
  PhotoHttpModule,
  ArticleMoudle,
  StudentModule,
  //BridgeVersionModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  onModuleInit(){
    console.log(`AppModule.onModuleInit :: enter, `)
  }
}


