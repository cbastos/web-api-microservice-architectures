import { Weather } from "../ports/Weather";
import { City } from "../ports/SportsClubRepository";
// import axios from 'axios';

export class WeatherWebApi implements Weather {
    isRainingIn(city: City): Promise<boolean> {

        // HTTP call logic: await axios.get('https://weather.com/api/israining') 
        return Promise.resolve(false);
    }
}


