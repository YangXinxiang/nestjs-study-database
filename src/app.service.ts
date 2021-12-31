import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config"
@Injectable()
export class AppService {
  constructor(private configService: ConfigService){
    this.printEnv()
  }
  getHello(): string {
    return 'Hello World!';
  }

  printEnv():void {
    const user:string = this.configService.get<string>("DB_USER");
    const host:string = this.configService.get<string>("DB_HOST");
    const port:string = this.configService.get<string>("DB_PORT");
    console.log(`printEnv :: enter, user = `, user, "host = ", host, ", port = ",port);
    const domain: string = this.configService.get("DOMAIN")
    const appRoute: string = this.configService.get("APP_PATH")
    console.log(`printEnv :: enter, domain = `, domain, "appRoute = ", appRoute);

    const h2:string = this.configService.get("port2")
    const db:any = this.configService.get("database2")
    const d2:string = this.configService.get("database2.port2")
    console.log(`printEnv :: enter, h2 = `, h2, "db = ", db, "database2.port2 = ", d2);
  }

  onModuleInit(){
    console.log(`AppModule.onModuleInit sssss :: enter, `)
  }
}
