import { PaddleCourt } from "../1. Entities - Enterprise Business Rules/PaddleCourt";

export interface SportsClubRepository {
    getAllPaddleCourts(): Promise<Array<PaddleCourt>>;
}

