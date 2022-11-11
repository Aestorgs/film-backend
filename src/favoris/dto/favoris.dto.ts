import { IsNotEmpty } from 'class-validator';
import { Users } from 'src/entities/users.entety';
import { Column } from 'typeorm';

export class CreateFavorisDto {
  @IsNotEmpty()
  @Column()
  showsId: number;

  @IsNotEmpty()
  users: Users;
}
