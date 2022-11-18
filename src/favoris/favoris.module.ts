import { Module } from '@nestjs/common';
import { FavorisService } from './favoris.service';
import { FavorisController } from './favoris.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favoris } from 'src/entities/favoris.entity';
import { Show } from 'src/entities/show.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favoris, Show])],
  controllers: [FavorisController],
  providers: [FavorisService],
})
export class FavorisModule {}
