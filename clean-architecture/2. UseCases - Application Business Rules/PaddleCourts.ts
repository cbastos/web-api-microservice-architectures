import { SportsClubRepository } from "./SportsClubRepository";
import { Weather } from "./Weather";
import { PaddleCourt } from "../1. Entities - Enterprise Business Rules/PaddleCourt";
import { inject, injectable } from 'inversify';
import TYPES from "../container.types";

@injectable()
export class PaddleCourts {
    constructor(
        @inject(TYPES.Weather) private weather: Weather,
        @inject(TYPES.SportsClubRepository) private sportsClubRepository: SportsClubRepository
    ) { }

    async getAvailables(): Promise<Array<PaddleCourt>> {
        const sportsClubPaddleCourts = await this.sportsClubRepository.getAllPaddleCourts();
        const availablePaddleCourts = [];
        for (let paddelCourt of sportsClubPaddleCourts) {
            const isRainingInPaddelCourt = await this.weather.isRainingIn(paddelCourt.city);
            if (!isRainingInPaddelCourt) {
                availablePaddleCourts.push(paddelCourt);
            }
        }
        return availablePaddleCourts;
    }
}


