import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Forfait} from '../forfait';
import {FormBuilder, FormControl, FormGroup, Validator, Validators, NgForm} from '@angular/forms';
import { CARACTERISTIQUES} from '../mock-caracteristiques';

@Component({
  selector: 'app-dialog-ajout-forfait',
  templateUrl: './dialog-ajout-forfait.component.html',
  styleUrls: ['./dialog-ajout-forfait.component.css']
})
export class DialogAjoutForfaitComponent{

  constructor( public dialogRef: MatDialogRef<DialogAjoutForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public newForfait: Forfait,
    private formBuilder: FormBuilder) { }
  // Caracteristiques
  caracteristiques : string[] = CARACTERISTIQUES;
  onAnnulerClick(): void {
    this.dialogRef.close();
  }
// Formulaire Validation
form : FormGroup
ngOnInit(){
this.form = this.formBuilder.group({
  destination: [null, [Validators.required]]
})
};
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
