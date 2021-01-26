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
  constructor() { }

  ngOnInit(): void {
  }

}
