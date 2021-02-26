// Liste forfait TS
// Par Charles-Etienne Villemure
// Le 24 Fevrier 2021

import { Component, OnInit, Input } from '@angular/core';
import {Forfait} from '../forfait';
import {ForfaitsService} from '../forfaits.service';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  @Input() nombreEtoiles: null;
  forfaits: Forfait[] ;
  constructor(private forfaitsService: ForfaitsService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }

}
