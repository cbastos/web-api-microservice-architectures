import 'reflect-metadata';
import { SportsClubWebApiUserInterface } from './4.B UserInterface/SportsClubWebApi';
import { container } from './container';
import TYPES from './container.types';

container.get<SportsClubWebApiUserInterface>(TYPES.SportsClubUserInterface).init();