import { Container } from 'inversify';
import { SportsClubRepository } from './2. UseCases - Application Business Rules/SportsClubRepository';
import { PaddleCourts } from './2. UseCases - Application Business Rules/PaddleCourts';
import { Weather } from './2. UseCases - Application Business Rules/Weather';
import { SportsClubInMemoryRepository } from './4. UI & Devices & Web & DB - Frameworks & Drivers/SportsClubInMemoryRepository';
import { WeatherWebApiClient } from './4. UI & Devices & Web & DB - Frameworks & Drivers/WeatherWebApiClient';
import { SportsClubWebApiUserInterface } from './4. UI & Devices & Web & DB - Frameworks & Drivers/SportsClubWebApi';
import TYPES from './container.types';
import { SportsClub } from './3. Presenters & Controllers & Gateways - Interface Adapters/SportsClub';

export const container = new Container();
container.bind(TYPES.PaddleCourts).to(PaddleCourts);
container.bind(TYPES.SportsClub).to(SportsClub);
container.bind<Weather>(TYPES.Weather).to(WeatherWebApiClient);
container.bind(TYPES.SportsClubUserInterface).to(SportsClubWebApiUserInterface);
container.bind<SportsClubRepository>(TYPES.SportsClubRepository).to(SportsClubInMemoryRepository);
