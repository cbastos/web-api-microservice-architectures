import { City } from "../1. Entities - Enterprise Business Rules/City";

export interface Weather {
    isRainingIn(city: City): Promise<boolean>;
}
