import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEpisodeDto } from './dto/episode.dto';
import { EpisodeService } from './episode.service';

@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  // je crée post pour j'envoie les donnée Episode
  @Post('saison')
  @UsePipes(ValidationPipe)
  postUsers(@Body() createEpisodeDto: CreateEpisodeDto) {
    return this.episodeService.createEpisode(createEpisodeDto);
  }
}
