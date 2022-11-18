import {
  Body,
  Controller,
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
}
