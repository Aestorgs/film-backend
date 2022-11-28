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
import { CreateEpisodeDto } from './dto/episode.dto';
import { EpisodeService } from './episode.service';

@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Post('saison')
  @UsePipes(ValidationPipe)
  postUsers(@Body() createEpisodeDto: CreateEpisodeDto) {
    return this.episodeService.createEpisode(createEpisodeDto);
  }

  @Get(':id')
  getSaison(@Param('id', ParseIntPipe) id: number) {
    return this.episodeService.findByEpisodeId(id);
  }
}
