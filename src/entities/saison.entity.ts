import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Episode } from './episode.entity';
import { Show } from './show.entity';

//je crée la table et crée les colonnes 

@Entity('saison')
export class Saison {
  constructor(params?: Partial<Saison>) {
    Object.assign(this, params);
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  saison: number;

  @Column()
  vue: boolean;

  @ManyToOne(() => Show, (shows) => shows.showsId)
  @JoinColumn({ name: 'showsId' })
  shows: Show;

  @OneToMany(() => Episode, (episode) => episode.episode)
  episode: Episode;
}
