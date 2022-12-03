import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Saison } from 'src/entities/saison.entity';
import { Show } from 'src/entities/show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SaisonService {
  constructor(
    @InjectRepository(Saison) private readonly saison: Repository<Saison>,
    @InjectRepository(Show) private readonly show: Repository<Show>,
  ) {}

  async createSaison(body: Partial<Saison>): Promise<Saison> {
    const show = new Show({ showsId: Number(body.shows) });
    const showErreur = await validate(show);
    if (showErreur.length) throw showErreur;
    await this.show.save(show);
    const saison = new Saison({
      saison: body.saison,
      vue: body.vue,
      shows: show,
    });
    const saiErreur = await validate(saison);
    if (saiErreur.length) throw saiErreur;
    return await this.saison.save(saison);
  }
}
