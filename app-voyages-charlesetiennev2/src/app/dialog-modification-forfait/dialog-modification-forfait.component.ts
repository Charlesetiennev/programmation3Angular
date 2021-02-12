import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Forfait} from '../forfait';
import {FormControl} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CARACTERISTIQUES} from '../mock-caracteristiques';

@Component({
  selector: 'app-dialog-modification-forfait',
  templateUrl: './dialog-modification-forfait.component.html',
  styleUrls: ['./dialog-modification-forfait.component.css']
})
export class DialogModificationForfaitComponent{
  constructor( public dialogRef: MatDialogRef<DialogModificationForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedForfait: Forfait) {
     }
  // @Input() selectedForfait : Forfait
    ngAfterViewInit():void {
      
     console.log(this.selectedForfait) 
    }
  onAnnulerClick(): void {
    this.dialogRef.close();
  }

}
