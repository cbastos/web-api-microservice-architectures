import { PaddleCourt } from "../1. Entities - Enterprise Business Rules/PaddleCourt";

export interface SportsClubUserInterface {
    installGetAvailablePaddleCourts(callback: () => Promise<PaddleCourt[]>): void;
}
