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
    this.newForfait = {_id : null, destination: '',rabais: null, villeDepart :'' , dateDepart: '', dateRetour: '', prix : 0, vedette : false, da: "1996340", 
                      hotel:{nom:'', nombreChambres: null, coordonnees:'',nombreEtoiles: null,caracteristiques:[]}
                      }
  }
  getForfaits(): void {
    this.forfaitsService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
    }
  // Ajout

  //  Dialog
  openDialogNewForfait(): void {
    const dialogRef = this.dialog.open(DialogAjoutForfaitComponent, {
      width: '250px',
      data:this.newForfait
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.newForfait = result;
        console.log(this.newForfait);
        // this.postForm.controls['isMale'].setValue(profile.isMale?'true':'false');
        this.forfaitsService.addForfait(this.newForfait)
            .subscribe(forfait  => { this.forfaits.push(forfait); 
                                     this.newForfait._id = null; 
                                     this.newForfait.da;
                                     this.newForfait.destination;
                                     
                                     this.newForfait.prix;
                                     this.newForfait.villeDepart;
                                     this.newForfait.dateRetour;
                                     this.newForfait.hotel.nom;
                                     this.newForfait.hotel.coordonnees;
                                     this.newForfait.hotel.nombreChambres;
                                     this.newForfait.vedette});
      }
    });
  }
  // Suppression
  onDelete(forfait: Forfait): void {
    this.forfaitsService.deleteForfait(forfait._id)
        .subscribe(result => this.forfaits = this.forfaits.filter(h => h !== forfait));
   }

}
