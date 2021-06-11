import { PaddleCourts } from "./PaddleCourts";
import { SportsClubUserInterface } from "./ports/SportsClubUserInterface";

export class SportsClub {
    constructor(
        private userInterface: SportsClubUserInterface,
        private paddleCourts: PaddleCourts
    ) { }

    init() {
        this.userInterface.installGetAvailablePaddleCourts(
            () => this.paddleCourts.getAvailables()
        );
    }
}
