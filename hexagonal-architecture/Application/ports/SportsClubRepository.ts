
export interface SportsClubRepository {
    getAllPaddleCourts(): Promise<Array<PaddleCourt>>;
}

export class PaddleCourt {
    number: number;
    city: City;
}

export type City = 'Madrid' | 'Valencia';