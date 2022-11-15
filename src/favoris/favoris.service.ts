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

  async deleteFavoris(showsId: number) {
    const favoris = await this.favoris.find({
      where: { showsId },
    });
    return this.favoris.remove(favoris);
  }
}
