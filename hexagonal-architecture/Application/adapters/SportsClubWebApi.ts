import express from 'express';
import { PaddleCourt } from '../PaddleCourts';
import { SportsClubUserInterface } from '../ports/SportsClubUserInterface';

export class SportsClubWebApiUserInterface implements SportsClubUserInterface {
    static PORT = 3000;
    constructor(private api = express()) {
        api.listen(SportsClubWebApiUserInterface.PORT, () => {
            console.log(`web api listening on port ${SportsClubWebApiUserInterface.PORT}`);
        });
    }

    installGetAvailablePaddleCourts(getAvailablePaddleCourts: () => Promise<PaddleCourt[]>): void {
        this.api.get('/api/paddle/courts', async (req, res) => {
            const availablePaddleCourts = await getAvailablePaddleCourts();
            res.json(availablePaddleCourts);
        });
    }
}

