import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity('show')
export class Show {
  constructor(params?: Partial<Show>) {
    Object.assign(this, params);
  }
  @PrimaryColumn()
  @IsNotEmpty()
  showsId: number;
}
