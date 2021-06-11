import { City } from "../3. Data Access/SportsClubRepository";
// import axios from 'axios';

export class Weather {
    isRainingIn(city: City): Promise<boolean> {

        // HTTP call logic: await axios.get('https://weather.com/api/israining') 
        return Promise.resolve(false);
    }
}
