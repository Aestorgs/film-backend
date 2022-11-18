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

@Entity('saison')
export class Saison {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  saison: number;

  @Column()
  vue: boolean;

  @ManyToOne(() => Show, (shows) => shows.showsId)
  @JoinColumn({ name: 'showsId' })
  showsId: Show;

  @OneToMany(() => Episode, (episode) => episode.episode)
  episode: Episode;
}
