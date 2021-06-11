import { SportsClubRepository } from "../3. Data Access/SportsClubRepository";
import { Weather } from "./Weather";

export class PaddleCourts {
    constructor(
        private weather = new Weather(),
        private sportsClubRepository = new SportsClubRepository()
    ) { }

    async getAvailables(): Promise<Array<PaddleCourt>> {
        const sportsClubPaddleCourts = await this.sportsClubRepository.getAllPaddleCourts();
        const availablePaddleCourts = [];
        for (let paddelCourt of sportsClubPaddleCourts){
            const isRainingInPaddelCourt = await this.weather.isRainingIn(paddelCourt.city);
            if(!isRainingInPaddelCourt){
                availablePaddleCourts.push(paddelCourt);
            }
        }
        return availablePaddleCourts;
    }
}

class PaddleCourt {
    number: number;
}

