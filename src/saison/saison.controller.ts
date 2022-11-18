import { Controller } from '@nestjs/common';
import { SaisonService } from './saison.service';

@Controller('saison')
export class SaisonController {
  constructor(private readonly saisonService: SaisonService) {}
}
