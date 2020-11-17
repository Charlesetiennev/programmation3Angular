import {Hotel} from "./hotel";

export interface Forfait {
    destination : string,
    villeDeDepart : string,
    dateDeDepart : string,
    dateDeRetour : string,
    prix : number,
    hotel : Hotel
}
