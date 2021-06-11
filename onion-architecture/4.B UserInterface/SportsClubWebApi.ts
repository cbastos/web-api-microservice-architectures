import express from 'express';
import { inject, injectable } from 'inversify';
import { PaddleCourts } from '../3. ApplicationServices/PaddleCourts';
import TYPES from '../container.types';

@injectable()
export class SportsClubWebApiUserInterface {
    static PORT = 3000;
    api = express();

    constructor(@inject(TYPES.PaddleCourts) private paddleCourts: PaddleCourts) { }

    init() {
        this.api.get('/api/paddle/courts', async (req, res) => {
            const availablePaddleCourts = await this.paddleCourts.getAvailables();
            res.json(availablePaddleCourts);
        });
        this.api.listen(SportsClubWebApiUserInterface.PORT, () => {
            console.log(`web api listening on port ${SportsClubWebApiUserInterface.PORT}`);
        });
    }

}

