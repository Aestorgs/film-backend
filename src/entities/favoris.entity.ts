import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Show } from './show.entity';
import { Users } from './users.entety';

@Entity('favoris')
export class Favoris {
  constructor(params?: Partial<Favoris>) {
    Object.assign(this, params);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Show, (shows) => shows.showsId)
  @JoinColumn({ name: 'showsId' })
  shows: Show;

  @ManyToOne(() => Users, (users) => users.id)
  users: Users;
}
