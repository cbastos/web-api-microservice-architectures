import express from 'express';
import { PaddleCourts } from '../2. Business Logic/PaddleCourts';

export class SportsClubWebApi {
    static PORT = 3000;

    constructor(
        private paddleCourts = new PaddleCourts()
    ) { }

    init(): Promise<void> {
        return new Promise<void>((resolve) => {
            const api = express();
            
            api.get('/api/paddle/courts', async (req, res) => {
                const availablePaddleCourts = await this.paddleCourts.getAvailables();
                res.json(availablePaddleCourts);
            });

            api.listen(SportsClubWebApi.PORT, () => {
                console.log(`web api listening on port ${SportsClubWebApi.PORT}`);
                resolve();
            });
        })
    }
}
