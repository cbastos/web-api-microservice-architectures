import express from 'express';
import { injectable } from 'inversify';
import { PaddleCourt } from '../1. Entities - Enterprise Business Rules/PaddleCourt';
import { SportsClubUserInterface } from '../3. Presenters & Controllers & Gateways - Interface Adapters/SportsClubUserInterface';

@injectable()
export class SportsClubWebApiUserInterface implements SportsClubUserInterface {
    static PORT = 3000;
    api = express();

    constructor() {
        this.api.listen(SportsClubWebApiUserInterface.PORT, () => {
            console.log(`web api listening on port ${SportsClubWebApiUserInterface.PORT}`);
        });
    }

    installGetAvailablePaddleCourts(callback: () => Promise<PaddleCourt[]>): void {
        this.api.get('/api/paddle/courts', async (req, res) => {
            const availablePaddleCourts = await callback();
            res.json(availablePaddleCourts);
        });
    }
}
