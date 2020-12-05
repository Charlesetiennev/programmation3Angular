// Petit-forfait TS
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

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

}