import { IsNotEmpty } from 'class-validator';
import { Users } from 'src/entities/users.entety';

export class CreateFavorisDto {
  @IsNotEmpty()
  showsId: number;

  @IsNotEmpty()
  users: Users;
}
