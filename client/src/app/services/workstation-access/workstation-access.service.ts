import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkstationAccessService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getAccessDropdown(){
    return this.http.get<({name:string})[]>(`${this.apiUrl}/workstation-access`).pipe(
      map(res => res.map(ws=>({'name': ws.name, 'label': ws.name})))
    );
  }
}
