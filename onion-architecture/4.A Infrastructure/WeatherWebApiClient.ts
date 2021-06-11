import { Weather } from "../3. ApplicationServices/Weather";
import { City } from "../1. DomainModel/City";
// import axios from 'axios';
import { inject, injectable } from "inversify";

@injectable()
export class WeatherWebApiClient implements Weather {
    isRainingIn(city: City): Promise<boolean> {

        // HTTP call logic: await axios.get('https://weather.com/api/israining') 
        return Promise.resolve(false);
    }
}


