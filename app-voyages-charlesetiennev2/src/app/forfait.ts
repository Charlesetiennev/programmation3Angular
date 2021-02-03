// Interface Forfait
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import {Hotel} from "./hotel";

export interface Forfait {
    _id: string,
    destination : string,
    villeDepart : string,
    dateDepart : string,
    dateRetour : string,
    prix : number,
    hotel : Hotel,
    vedette: boolean,
    rabais : number
    da: string
}
