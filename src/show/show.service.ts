import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Show } from 'src/entities/show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show) private readonly show: Repository<Show>,
  ) {}
}
