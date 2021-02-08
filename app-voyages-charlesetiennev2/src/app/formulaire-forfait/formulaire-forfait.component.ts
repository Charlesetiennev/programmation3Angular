// Formulaire Forfait TS
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CARACTERISTIQUES} from '../mock-caracteristiques';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  // 
  coordoneesHotel : string = "";
  nomHotel : string = "";
  // Caracteristiques
  caracteristiques : string[] = CARACTERISTIQUES;
  // Destination
  myControl = new FormControl();
  options: string[] = ['Punta Cana', 'Costa Rica', 'Mexique','Cuba','Colombie','Venuzuela'];
  // Ville de depart
  myControlDeux = new FormControl();
  optionsDeux: string[] = ['Montreal', 'Quebec', 'Vald\'or','Trois-Rivieres'];
  // Slider Etoiles
  formatLabel(value: number) {
    if (value >0) {
      return Math.round(value);
    }
    return value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
