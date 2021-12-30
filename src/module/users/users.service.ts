import { Injectable } from '@nestjs/common';
import { InjectRepository,InjectConnection,InjectEntityManager, } from '@nestjs/typeorm';
import { Repository, Connection,EntityManager ,ConnectionOptions, } from 'typeorm';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {
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
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}