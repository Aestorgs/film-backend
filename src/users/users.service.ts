import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entety';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly users: Repository<Users>,
  ) {}

  async createUsers(CreateUserDto: CreateUsersDto) {
    const users = this.users.create(CreateUserDto);
    users.password = await bcrypt.hash(users.password, 10);
    return this.users.save(users);
  }

  async loginUsers(email: string, password: string) {
    const users = await this.users.findOne({
      select: ['id', 'password'],
      where: { email },
    });
    if (await bcrypt.compare(password, users.password))
      return 'users connected';
    else return 'erreur password or email';
  }

  findByFavorisId(id: number) {
    return this.users.findOne({
      relations: { favoris: true },
      where: { id },
    });
  }
}
