import { Module } from '@nestjs/common';
import { FavorisService } from './favoris.service';
import { FavorisController } from './favoris.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favoris } from 'src/entities/favoris.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favoris])],
  controllers: [FavorisController],
  providers: [FavorisService],
})
export class FavorisModule {}
