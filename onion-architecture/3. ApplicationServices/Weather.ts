import { City } from "../1. DomainModel/City";

export interface Weather {
    isRainingIn(city: City): Promise<boolean>;
}
