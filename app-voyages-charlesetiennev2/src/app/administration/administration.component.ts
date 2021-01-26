import { Component, OnInit } from '@angular/core';
import {Forfait} from '../forfait';
import {ForfaitsService} from '../forfaits.service';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  columnsToDisplay = ['dateDepart','dateRetour','nom','prix','suppresion'];
  forfaits: Forfait[] ;

  constructor(private forfaitsService: ForfaitsService) { }

  ngOnInit(): void {
    this.getForfaits();
    console.log(this.forfaits)
  }
  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
    }
  onDelete(forfait: Forfait): void {
    this.forfaitsService.deleteForfait(forfait._id)
        .subscribe(result => this.forfaits = this.forfaits.filter(h => h !== forfait));
   }
   
}
