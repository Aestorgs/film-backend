import { IsNotEmpty } from 'class-validator';
import { Show } from 'src/entities/show.entity';
import { Users } from 'src/entities/users.entety';

export class CreateFavorisDto {
  @IsNotEmpty()
  shows: Show;

  @IsNotEmpty()
  users: Users;
}
