import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entety';

@Entity('favoris')
export class Favoris {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  showsId: number;

  @ManyToOne(() => Users, (users) => users.favoris)
  users: Users;
}
