import { BadRequestException, Injectable } from '@nestjs/common';
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

  // envoyer les donnée register 
  async createUsers(createUserDto: CreateUsersDto) {
    const users = this.users.create(createUserDto);
    users.password = await bcrypt.hash(users.password, 10);
    return this.users.save(users);
  }
  
  // pour se connecter login 
  async loginUsers(email: string, password: string) {
    const users = await this.users.findOne({
      select: ['id', 'password'],
      where: { email },
    });
    if (await bcrypt.compare(password, users.password))
      return { users: users.id };
    else
      throw new BadRequestException('erreur email or password', {
        cause: new Error(),
      });
  }

  // afficher utilisateur avec id et c'est favoris 
  findByFavorisId(id: number) {
    return this.users.findOne({
      relations: { favoris: { shows: true } },
      where: { id },
    });
  }
}
