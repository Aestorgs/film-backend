import { Module } from '@nestjs/common';
import { SaisonService } from './saison.service';
import { SaisonController } from './saison.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saison } from 'src/entities/saison.entity';
import { Show } from 'src/entities/show.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Saison, Show])],
  controllers: [SaisonController],
  providers: [SaisonService],
})
export class SaisonModule {}
