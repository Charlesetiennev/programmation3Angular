// Forfait-x.ts
// Par Charles-Etienne Villemure
// Le 24 Fevrier 2021
import { Component, OnInit } from '@angular/core';
import {Forfait} from '../forfait';
import {ForfaitsService} from '../forfaits.service';

@Component({
  selector: 'app-forfaits-x',
  templateUrl: './forfaits-x.component.html',
  styleUrls: ['./forfaits-x.component.css']
})
export class ForfaitsXComponent implements OnInit {

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
