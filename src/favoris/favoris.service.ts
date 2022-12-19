import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Favoris } from 'src/entities/favoris.entity';
import { Show } from 'src/entities/show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavorisService {
  constructor(
    @InjectRepository(Favoris) private readonly favoris: Repository<Favoris>,
    @InjectRepository(Show) private readonly shows: Repository<Show>,
  ) {}

  // j'envoie les données favoris
  async createFavoris(body: Partial<Favoris>): Promise<Favoris> {
    const show = new Show({ showsId: Number(body.shows) });
    const showErreur = await validate(show);
    if (showErreur.length) throw showErreur;
    await this.shows.save(show);
    const favoris = new Favoris({
      shows: show,
      users: body.users,
    });
    const favErreur = await validate(favoris);
    if (favErreur.length) throw favErreur;
    return await this.favoris.save(favoris);
  }

  // je suprime en favoris id 
  async deleteFavoris(id: number) {
    return this.favoris.delete(id);
  }
}
