import { Module } from '@nestjs/common';
import { SaisonService } from './saison.service';
import { SaisonController } from './saison.controller';

@Module({
  controllers: [SaisonController],
  providers: [SaisonService],
})
export class SaisonModule {}
