import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUsersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // pour envoyer les donnée register 
  @Post('register')
  @UsePipes(ValidationPipe)
  postUsers(@Body() createUserDto: CreateUsersDto) {
    return this.usersService.createUsers(createUserDto);
  }
// pour connecter au login 
  @Post('login')
  @HttpCode(200)
  loginUsers(@Body() users: any) {
    return this.usersService.loginUsers(users.email, users.password);
  }
// pour afficher les favoris et id 
  @Get('favoris/:id')
  getUsersFavoris(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findByFavorisId(id);
  }
}
