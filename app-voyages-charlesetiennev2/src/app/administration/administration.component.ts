import { Component, OnInit } from '@angular/core';
import {Forfait} from '../forfait';
import {ForfaitsService} from '../forfaits.service';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import {DialogAjoutForfaitComponent} from '../dialog-ajout-forfait/dialog-ajout-forfait.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  columnsToDisplay = ['dateDepart','dateRetour','nom','prix','suppresion'];
  forfaits: Forfait[] ;
  newForfait: Forfait ;

  constructor(private forfaitsService: ForfaitsService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getForfaits();
    // this.newForfait = {_id : null, destination: '', villeDepart :'' , dateDepart: '', dateRetour: '', prix : 0, vedette : false, da: "1996340"}
  }
  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
    }
  onDelete(forfait: Forfait): void {
    this.forfaitsService.deleteForfait(forfait._id)
        .subscribe(result => this.forfaits = this.forfaits.filter(h => h !== forfait));
   }
  //  Dialog
  openDialogNewForfait(): void {
    const dialogRef = this.dialog.open(DialogAjoutForfaitComponent, {
      width: '75%',
      data: this.newForfait
    });
  }
}
