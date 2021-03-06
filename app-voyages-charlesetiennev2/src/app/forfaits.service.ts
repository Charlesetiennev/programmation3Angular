// Forfait.service
// Par Charles-Etienne Villemure
// Le 24 Fevrier 2021
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Forfait} from './forfait';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ForfaitsService {
  forfaitsUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/da/1996340';
  forfaitCRUDUrl = "https://forfaits-voyages.herokuapp.com/api/forfaits/";


  constructor(private http: HttpClient) { }
  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);  
  }
// Ajout Forfait
  addForfait(forfait: Forfait): Observable<Forfait>{
    return this.http.post<Forfait>(this.forfaitCRUDUrl , forfait,httpOptions)  }
// Mise a jour Forfait
    updateForfait(forfait: Forfait): Observable<any> {
      const id = forfait._id;
      return this.http.put<Forfait>(this.forfaitCRUDUrl + id, forfait, httpOptions);
  }
// Suppression Forfait
    deleteForfait(id: string): Observable<Forfait> {
      return this.http.delete<Forfait>(this.forfaitCRUDUrl + id, httpOptions);
  }
}