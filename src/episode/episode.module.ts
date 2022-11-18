import { Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { Episode } from 'src/entities/episode.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Episode])],
  controllers: [EpisodeController],
  providers: [EpisodeService],
})
export class EpisodeModule {}
