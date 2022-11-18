import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Saison } from './saison.entity';

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
