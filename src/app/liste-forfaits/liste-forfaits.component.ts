import { Component, OnInit } from '@angular/core';
import {Forfait} from '../forfait';
import {FORFAITS} from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  forfaits: Forfait[] = FORFAITS;
  constructor() { }

  ngOnInit(): void {
  }

}
