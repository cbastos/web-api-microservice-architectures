import { SportsClubInMemoryRepository } from './Application/adapters/SportsClubInMemoryRepository';
import { SportsClubWebApiUserInterface } from './Application/adapters/SportsClubWebApi';
import { WeatherWebApi } from './Application/adapters/WeatherWebApi';
import { PaddleCourts } from './Application/PaddleCourts';
import { SportsClub } from './Application/SportsClub';

const sportsClub = new SportsClub(
    new SportsClubWebApiUserInterface(),
    new PaddleCourts(
        new WeatherWebApi(),
        new SportsClubInMemoryRepository()
    )
);

sportsClub.init();