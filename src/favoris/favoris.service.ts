import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favoris } from 'src/entities/favoris.entity';
import { Repository } from 'typeorm';
import { CreateFavorisDto } from './dto/favoris.dto';

@Injectable()
export class FavorisService {
  constructor(
    @InjectRepository(Favoris) private readonly favoris: Repository<Favoris>,
  ) {}

  createFavoris(createFavorisDto: CreateFavorisDto) {
    const favoris = this.favoris.create(createFavorisDto);
    return this.favoris.save(favoris);
  }

  async deleteFavoris(id: number) {
    console.log(id);
    return this.favoris.delete(id);
  }
}
