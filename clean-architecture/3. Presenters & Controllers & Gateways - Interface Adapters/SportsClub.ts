import { inject, injectable } from "inversify";
import { PaddleCourts } from "../2. UseCases - Application Business Rules/PaddleCourts";
import TYPES from "../container.types";
import { SportsClubUserInterface } from "./SportsClubUserInterface";

@injectable()
export class SportsClub {
    constructor(
        @inject(TYPES.SportsClubUserInterface) private userInterface: SportsClubUserInterface,
        @inject(TYPES.PaddleCourts) private paddleCourts: PaddleCourts
    ) { }

    init() {
        this.userInterface.installGetAvailablePaddleCourts(
            () => this.paddleCourts.getAvailables() // Adapter logic here: from entities to ui structures
        );
    }
}
