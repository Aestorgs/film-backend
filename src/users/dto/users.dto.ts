import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUsersDto {
  @IsNotEmpty()
  @MinLength(3)
  firstname: string;

  @IsNotEmpty()
  @MinLength(3)
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
