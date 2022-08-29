import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity) private userRepo: Repository<UsersEntity>,
  ) {}

  registerUser(createUserDto) {
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }

  findone(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  find(email: string) {
    return this.userRepo.findBy({ email });
  }

  update() {}

  remove() {}
}
