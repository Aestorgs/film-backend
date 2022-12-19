import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Saison } from './saison.entity';

//je crée la table et crée les colonnes 
@Entity('episode')
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  episode: number;

  @Column()
  vue: boolean;

  @ManyToOne(() => Saison, (saison) => saison.episode)
  saison: Saison;
}
