export class SportsClubRepository {
    getAllPaddleCourts(): Promise<Array<PaddleCourt>> {
        return Promise.resolve([
            { number: 5, city: 'Madrid' },
            { number: 1, city: 'Valencia' },
            { number: 2, city: 'Madrid' }
        ]);
    }
}

class PaddleCourt {
    number: number;
    city: City;
}

export type City = 'Madrid' | 'Valencia';