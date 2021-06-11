import 'reflect-metadata';
import { SportsClub } from './3. Presenters & Controllers & Gateways - Interface Adapters/SportsClub';
import { container } from './container';
import TYPES from './container.types';

container.get<SportsClub>(TYPES.SportsClub).init();