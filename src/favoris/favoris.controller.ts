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
import { CreateFavorisDto } from './dto/favoris.dto';
import { FavorisService } from './favoris.service';

@Controller('favoris')
export class FavorisController {
  constructor(private readonly favorisService: FavorisService) {}

  @Post('shows')
  @UsePipes(ValidationPipe)
  postFavoris(@Body() createFavorisDto: CreateFavorisDto) {
    return this.favorisService.createFavoris(createFavorisDto);
  }

  @Delete(':id')
  getDeleteFavoris(@Param('id', ParseIntPipe) id: number) {
    return this.favorisService.deleteFavoris(id);
  }
}
