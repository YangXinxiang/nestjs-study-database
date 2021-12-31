import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository,InjectConnection,InjectEntityManager, } from '@nestjs/typeorm';
import { Repository, Connection,EntityManager ,ConnectionOptions, } from 'typeorm';
import {ConfigService} from "@nestjs/config"
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {
  @Inject(ConfigService)
  private configService:ConfigService;
  
  // 不写在构造函数的参数中，写在成员属性中，也是可以的。
  // constructor(
  //   @InjectRepository(User)
  //   private usersRepository: Repository<User>
  // ) {}
  @InjectRepository(User)
  private usersRepository: Repository<User>

  // constructor(
  //   @InjectConnection('myDB')
  //   private readonly connection: Connection,
  //   @InjectEntityManager('myDB')
  //   private readonly entityManager: EntityManager,
  // ) {}


  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    this.printEnv()
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  printEnv():void {
    const user:string = this.configService.get<string>("DB_USER");
    const host:string = this.configService.get<string>("DB_HOST");
    const port:string = this.configService.get<string>("DB_PORT");
    console.log(`User.printEnv :: enter, user = `, user, "host = ", host, ", port = ",port);
    const domain: string = this.configService.get("DOMAIN")
    const appRoute: string = this.configService.get("APP_PATH")
    console.log(`User.printEnv :: enter, domain = `, domain, "appRoute = ", appRoute);
  }
}