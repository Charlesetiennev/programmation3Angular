// Nombre etoiles CSS
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import { Component, OnInit, Input } from '@angular/core';
import {Forfait} from '../forfait';

@Component({
  selector: 'app-nombre-etoiles',
  templateUrl: './nombre-etoiles.component.html',
  styleUrls: ['./nombre-etoiles.component.css']
})
export class NombreEtoilesComponent implements OnInit {
  @Input() forfait: Forfait;
  constructor() { }
  ngOnInit(): void {
  }
}
