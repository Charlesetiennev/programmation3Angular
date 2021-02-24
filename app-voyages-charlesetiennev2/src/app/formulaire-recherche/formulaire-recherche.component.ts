// Formulaire recherche TS
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { CARACTERISTIQUES} from '../mock-caracteristiques';
import {DUREESEJOURS} from '../mock-duree-sejour';
import {DureeSejour} from '../duree-sejour';
@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})
export class FormulaireRechercheComponent implements OnInit {
  
  showFiller = false;
  caracteristiques : string[] = CARACTERISTIQUES;
  dureeSejours : DureeSejour[] = DUREESEJOURS;
  formatLabel(value: number) {
    if (value >0) {
      return Math.round(value);
    }
    return value;
  }
  @Input() nombreEtoiles: number;
  @Output() nombreEtoilesChange = new EventEmitter();  
  change(nouvelleValeur){
    this.nombreEtoilesChange.emit(nouvelleValeur);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
