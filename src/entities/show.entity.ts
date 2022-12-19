import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryColumn } from 'typeorm';

//je crée la table et crée les colonnes 
@Entity('show')
export class Show {
  constructor(params?: Partial<Show>) {
    Object.assign(this, params);
  }
  @PrimaryColumn()
  @IsNotEmpty()
  showsId: number;
}
