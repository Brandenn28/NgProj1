import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class WorkstationFeaturesService {

  private apiUrl = 'http://localhost:3000'

  constructor(private http:HttpClient) {}

  getFeaturesForDropdown(): Observable<any>{
    return this.http.get<({name:string}[])>(`${this.apiUrl}/workstation-features`).pipe(
      map(response => response.map(ws => ({'name': ws.name, 'value': ws.name})))
    );
    // return 'Get features successful';
  }

  getAvailabilityForDropdown(){
    return this.
  }

  // getWorkstations(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/workstations`);
  // }
}
