import { Container } from 'inversify';
import { SportsClubRepository } from './2. DomainServices/SportsClubRepository';
import { PaddleCourts } from './3. ApplicationServices/PaddleCourts';
import { Weather } from './3. ApplicationServices/Weather';
import { SportsClubInMemoryRepository } from './4.A Infrastructure/SportsClubInMemoryRepository';
import { WeatherWebApiClient } from './4.A Infrastructure/WeatherWebApiClient';
import { SportsClubWebApiUserInterface } from './4.B UserInterface/SportsClubWebApi';
import TYPES from './container.types';

export const container = new Container();
container.bind(TYPES.PaddleCourts).to(PaddleCourts);
container.bind<Weather>(TYPES.Weather).to(WeatherWebApiClient);
container.bind(TYPES.SportsClubUserInterface).to(SportsClubWebApiUserInterface);
container.bind<SportsClubRepository>(TYPES.SportsClubRepository).to(SportsClubInMemoryRepository);
