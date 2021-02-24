// Reservation.service
// Par Charles-Etienne Villemure
// Le 24 Fevrier 2021
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Reservations} from './reservations';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  ReservationsUrl = 'https://forfaits-voyages.herokuapp.com/api/reservations';

  constructor(private http: HttpClient) { }
  getReservations(): Observable<Reservations[]> {
    return this.http.get<Reservations[]>(this.ReservationsUrl);  
  }
}