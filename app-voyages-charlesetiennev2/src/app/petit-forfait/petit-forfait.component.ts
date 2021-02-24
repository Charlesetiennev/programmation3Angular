// Petit-forfait TS
// Par Charles-Etienne Villemure
// Le 24 Fevrier 2021

import { Component, OnInit, Input  } from '@angular/core';
import {Forfait} from '../forfait';
@Component({
  selector: 'app-petit-forfait',
  templateUrl: './petit-forfait.component.html',
  styleUrls: ['./petit-forfait.component.css']
})
export class PetitForfaitComponent implements OnInit {
  @Input() forfait : Forfait;
  constructor() { }

  ngOnInit(): void {
  }
  dureeDuVoyage(dateDepart,dateRetour){
    let dateDeDepart : any = new Date (dateDepart);
    let dateDeRetour : any = new Date (dateRetour);
    let difference = Math.round(Math.abs((dateDeRetour.getTime() - dateDeDepart.getTime())/(1000*3600*24)));
    return difference;
  };
}
