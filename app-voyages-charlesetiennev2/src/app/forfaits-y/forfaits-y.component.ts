// Forfait-y.ts
// Par Charles-Etienne Villemure
// Le 24 Fevrier 2021
import { Component, OnInit } from '@angular/core';
import {Forfait} from '../forfait';
import {ForfaitsService} from '../forfaits.service';

@Component({
  selector: 'app-forfaits-y',
  templateUrl: './forfaits-y.component.html',
  styleUrls: ['./forfaits-y.component.css']
})
export class ForfaitsYComponent implements OnInit {

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
