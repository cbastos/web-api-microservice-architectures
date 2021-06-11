import { Weather } from "../2. UseCases - Application Business Rules/Weather";
import { City } from "../1. Entities - Enterprise Business Rules/City";
// import axios from 'axios';
import { injectable } from "inversify";

@injectable()
export class WeatherWebApiClient implements Weather {
    isRainingIn(city: City): Promise<boolean> {

        // HTTP call logic: await axios.get('https://weather.com/api/israining') 
        return Promise.resolve(false);
    }
}


