import { City } from "./SportsClubRepository";

export interface Weather {
    isRainingIn(city: City): Promise<boolean>;
}