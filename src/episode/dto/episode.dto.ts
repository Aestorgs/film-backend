import { IsNotEmpty } from 'class-validator';
import { Saison } from 'src/entities/saison.entity';

export class CreateEpisodeDto {
  @IsNotEmpty()
  episode: number;

  @IsNotEmpty()
  vue: boolean;

  @IsNotEmpty()
  saison: Saison;
}
