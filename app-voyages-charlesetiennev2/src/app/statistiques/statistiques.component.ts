import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import {Reservations} from '../reservations';
import {ReservationsService} from '../reservations.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  reservations: Reservations[];
  constructor(private reservationsService: ReservationsService) { }

  ngOnInit(): void {
    this.getReservations();
  }
  getReservations(): void{
    this.reservationsService.getReservations()
    .subscribe(resultat => this.reservations = resultat);   
  }
}


// https://angular.io/guide/inputs-outputs
// Watching for @Input() changes
