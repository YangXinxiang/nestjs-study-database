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
  }
}
