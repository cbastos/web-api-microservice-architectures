import { PaddleCourt } from "../1. DomainModel/PaddleCourt";

export interface SportsClubRepository {
    getAllPaddleCourts(): Promise<Array<PaddleCourt>>;
}

