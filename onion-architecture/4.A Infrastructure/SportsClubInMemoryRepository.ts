
import { PaddleCourt } from "../1. DomainModel/PaddleCourt";
import { SportsClubRepository } from "../2. DomainServices/SportsClubRepository";
import { injectable } from "inversify";

@injectable()
export class SportsClubInMemoryRepository implements SportsClubRepository {
    getAllPaddleCourts(): Promise<Array<PaddleCourt>> {
        return Promise.resolve([
            { number: 5, city: 'Madrid' },
            { number: 1, city: 'Valencia' },
            { number: 2, city: 'Madrid' }
        ]);
    }
}
