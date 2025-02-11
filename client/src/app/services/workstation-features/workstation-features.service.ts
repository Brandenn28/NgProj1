import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WorkstationFeaturesService {

  private apiUrl = 'http://localhost:3000'

  constructor(private http:HttpClient) {}

  getAllFeatures(): Observable<any>{
    return this.http.get(`${this.apiUrl}/workstation-features`);
    // return 'Get features successful';
  }

  // getWorkstations(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/workstations`);
  // }
}
