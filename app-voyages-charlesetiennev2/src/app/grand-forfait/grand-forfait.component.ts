// Grand forfait TS
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import { Component, OnInit, Input } from '@angular/core';
import {Forfait} from '../forfait';

@Component({
  selector: 'app-grand-forfait',
  templateUrl: './grand-forfait.component.html',
  styleUrls: ['./grand-forfait.component.css']
})
export class GrandForfaitComponent implements OnInit {
// @Input() description : number;
@Input() forfait: Forfait;
dureeVoyage : string;
  constructor() { }

  ngOnInit(): void {
    let dateDepart: any = new Date(this.forfait.dateDepart);
    let dateRetour: any = new Date(this.forfait.dateRetour);
    var diffDays:any = Math.floor((dateRetour - dateDepart) / (1000 * 60 * 60 * 24));
      console.log(diffDays)
    diffDays = this.dureeVoyage;
  };
}
