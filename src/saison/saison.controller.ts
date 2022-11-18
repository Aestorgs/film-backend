import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Saison } from 'src/entities/saison.entity';
import { SaisonService } from './saison.service';

@Controller('saison')
export class SaisonController {
  constructor(private readonly saisonService: SaisonService) {}

  @Post('shows')
  @UsePipes(ValidationPipe)
  async postSaison(@Body() body: Partial<Saison>) {
    return this.saisonService.createSaison(body);
  }

  @Get('saisons/:id')
  getSaison(@Param('id', ParseIntPipe) id: number) {
    return this.saisonService.findBySaisonId(id);
  }
}
