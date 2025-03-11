import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkstationService {

  constructor(private http:HttpClient) { }

  private apiUrl ='http://localhost:3000';

  getAvailabilityForDropdown() {
    return this.http.get<string[]>(`${this.apiUrl}/workstation/enum-availability`).pipe(
      map(res => res.map(val => ({ 'name': val, 'label': val })))
    );

  }

  createWorkstation(data:any[]){
    return this.http.post(`${this.apiUrl}/workstation/new`, data);
  }
  
}
