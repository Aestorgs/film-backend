import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Favoris } from 'src/entities/favoris.entity';
import { FavorisService } from './favoris.service';

@Controller('favoris')
export class FavorisController {
  constructor(private readonly favorisService: FavorisService) {}

   //je crée post pour envoyer en favoris 
  @Post('shows')
  @UsePipes(ValidationPipe)
  async postFavoris(@Body() body: Partial<Favoris>) {
    return this.favorisService.createFavoris(body);
  }

  //je crée delete pour suprime en favoris id 
  @Delete(':id')
  getDeleteFavoris(@Param('id', ParseIntPipe) id: number) {
    return this.favorisService.deleteFavoris(id);
  }
}
