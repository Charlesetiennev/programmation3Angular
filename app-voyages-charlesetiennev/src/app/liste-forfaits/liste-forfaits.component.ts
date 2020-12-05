// Liste forfait TS
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import { Component, OnInit, Input } from '@angular/core';
import {Forfait} from '../forfait';
import {FORFAITS} from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  @Input() description: number;
  forfaits: Forfait[] = FORFAITS;
  constructor() { }

  ngOnInit(): void {
  }

}
