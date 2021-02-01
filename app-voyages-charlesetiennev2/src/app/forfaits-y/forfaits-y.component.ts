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
    console.log(this.forfaits)
  }
  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
        console.log(this.forfaits)
  }
}
