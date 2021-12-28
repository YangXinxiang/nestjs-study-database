import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entry';

@Injectable()
export class UsersService {
  // 不写在构造函数的参数中，写在成员属性中，也是可以的。
  // constructor(
  //   @InjectRepository(User)
  //   private usersRepository: Repository<User>
  // ) {}
  @InjectRepository(User)
  private usersRepository: Repository<User>

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