import { Episode } from './episode.entity';
import { Favoris } from './favoris.entity';
import { Saison } from './saison.entity';
import { Show } from './show.entity';
import { Users } from './users.entety';

 //j'affiche les tables dans postgres 
const entities = [Users, Favoris, Saison, Episode, Show];
export default entities;
