import { SportsClubRepository } from "./ports/SportsClubRepository";
import { Weather } from "./ports/Weather";

export class PaddleCourts {
    constructor(
        private weather: Weather,
        private sportsClubRepository: SportsClubRepository
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

export class PaddleCourt {
    number: number;
}
