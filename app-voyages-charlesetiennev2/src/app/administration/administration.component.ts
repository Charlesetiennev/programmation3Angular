import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitsService } from '../forfaits.service';
import { MatTable } from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { DialogAjoutForfaitComponent } from '../dialog-ajout-forfait/dialog-ajout-forfait.component';
import {DialogModificationForfaitComponent} from '../dialog-modification-forfait/dialog-modification-forfait.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  columnsToDisplay = ['dateDepart', 'dateRetour', 'nom', 'prix','modification', 'suppresion'];
  forfaits: Forfait[];
  newForfait: Forfait;
  selectedForfait: Forfait;

  constructor(private forfaitsService: ForfaitsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getForfaits();
    this.newForfait = {
      _id: null, destination: '', rabais: null, villeDepart: '', dateDepart: '', dateRetour: '', prix: 0, vedette: false, da: "1996340",
      hotel: { nom: '', nombreChambres: null, coordonnees: '', nombreEtoiles: null, caracteristiques: [] }
    }
  }
  getForfaits(): void {
    this.forfaitsService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
  // Ajout
  openDialogNewForfait(): void {
    const dialogRef = this.dialog.open(DialogAjoutForfaitComponent, {
      width: '75%',
      data: this.newForfait
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newForfait = result;
        this.forfaitsService.addForfait(this.newForfait)
          .subscribe(forfait => {
            this.forfaits.push(forfait);
            this.newForfait._id = null;
            this.newForfait.da;
            this.newForfait.destination;
            this.newForfait.rabais;
            this.newForfait.hotel.caracteristiques;
            this.newForfait.prix;
            this.newForfait.dateDepart;
            this.newForfait.villeDepart;
            this.newForfait.dateRetour;
            this.newForfait.hotel.nom;
            this.newForfait.hotel.coordonnees;
            this.newForfait.hotel.nombreChambres;
            this.newForfait.hotel.nombreEtoiles;
            this.newForfait.vedette;
            this.table.renderRows()
          });
      }
    });
  }
  // Mise a jour
  onSelect(forfait:Forfait):void{
    this.selectedForfait = forfait;
    this.openDialogEditForfait();
  }
  openDialogEditForfait(): void {
    const dialogRef = this.dialog.open(DialogModificationForfaitComponent, {
      width: '50%',
      data: this.selectedForfait
    });
        dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedForfait = result;
      }
    });
  }
  // Suppression
  onDelete(forfait: Forfait): void {
    this.forfaitsService.deleteForfait(forfait._id)
      .subscribe(result => this.forfaits = this.forfaits.filter(h => h !== forfait));
  }

}
