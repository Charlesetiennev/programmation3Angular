import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Forfait} from '../forfait';
import {FormControl} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CARACTERISTIQUES} from '../mock-caracteristiques';

@Component({
  selector: 'app-dialog-ajout-forfait',
  templateUrl: './dialog-ajout-forfait.component.html',
  styleUrls: ['./dialog-ajout-forfait.component.css']
})
export class DialogAjoutForfaitComponent{

  constructor( public dialogRef: MatDialogRef<DialogAjoutForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public newForfait: Forfait) { }
      // Caracteristiques
  caracteristiques : string[] = CARACTERISTIQUES;

  onAnnulerClick(): void {
    this.dialogRef.close();
  }
  // Slider Etoiles
    // Slider Etoiles
    formatLabel(value: number) {
      if (value >0) {
        return Math.round(value);
      }
      return value;
    }
     // Ville de depart
     myControlDeux = new FormControl();
     optionsDeux: string[] = ['Montreal', 'Quebec', 'Vald\'or','Trois-Rivieres'];
}
