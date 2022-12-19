import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Episode } from 'src/entities/episode.entity';
import { Repository } from 'typeorm';
import { CreateEpisodeDto } from './dto/episode.dto';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode) private readonly episode: Repository<Episode>,
  ) {}

  // j'envoie les donnée Episode
  async createEpisode(createEpisodeDto: CreateEpisodeDto) {
    const episode = this.episode.create(createEpisodeDto);
    return this.episode.save(episode);
  }
}
