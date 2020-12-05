// Interface Forfait
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import {Hotel} from "./hotel";

export interface Forfait {
    destination : string,
    villeDeDepart : string,
    dateDeDepart : string,
    dateDeRetour : string,
    prix : number,
    hotel : Hotel,
    forfaitVedette: boolean,
    rabais : number
}
