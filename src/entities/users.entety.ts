import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Favoris } from './favoris.entity';

//je crée la table et crée les colonnes 
@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Favoris, (favoris) => favoris.users)
  favoris: Favoris[];
}
