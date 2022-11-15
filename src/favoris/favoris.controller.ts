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

  @Delete(':showsId')
  getDeleteFavoris(@Param('showsId', ParseIntPipe) showsId: number) {
    console.log(showsId);
    return this.favorisService.deleteFavoris(showsId);
  }
}
