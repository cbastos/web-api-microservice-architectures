import { PaddleCourt } from "../PaddleCourts";

export interface SportsClubUserInterface {
    installGetAvailablePaddleCourts(callback: () => Promise<PaddleCourt[]>): void;
}