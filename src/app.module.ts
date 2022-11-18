import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { FavorisModule } from './favoris/favoris.module';
import { SaisonModule } from './saison/saison.module';
import { EpisodeModule } from './episode/episode.module';
import { ShowModule } from './show/show.module';
import entities from './entities';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get('DB_HOST'),
        port: <number>ConfigService.get('DB_PORT'),
        username: ConfigService.get('DB_USERNAME'),
        password: ConfigService.get('DB_PASSWORD'),
        database: ConfigService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    FavorisModule,
    SaisonModule,
    EpisodeModule,
    ShowModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
