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
  // NOT DEFINED
  forfaitsUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/da/1996340';


  constructor(private http: HttpClient) { }
  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);  
  }
    /** PUT: mise à jour */
    updateForfait(forfait: Forfait): Observable<any> {
      const id = forfait._id;
      return this.http.put<Forfait>(this.forfaitsUrl + id, forfait, httpOptions);
  }
  /** DELETE: suppression*/
    deleteForfait(id: string): Observable<Forfait> {
      return this.http.delete<Forfait>(this.forfaitsUrl + id, httpOptions);
  }
}


https://forfaits-voyages.herokuapp.com/api/forfaits/_id/6000ff360efa3fd999621bef