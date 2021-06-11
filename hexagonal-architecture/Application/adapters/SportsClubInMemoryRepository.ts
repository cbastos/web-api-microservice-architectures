
import { PaddleCourt, SportsClubRepository } from "../ports/SportsClubRepository";

export class SportsClubInMemoryRepository implements SportsClubRepository{
    getAllPaddleCourts(): Promise<Array<PaddleCourt>> {
        return Promise.resolve([
            { number: 5, city: 'Madrid' },
            { number: 1, city: 'Valencia' },
            { number: 2, city: 'Madrid' }
        ]);
    }
}
