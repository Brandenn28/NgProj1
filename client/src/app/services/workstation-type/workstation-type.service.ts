import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkstationTypeService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getTypeDropDown(): Observable<any>{
    return this.http.get<({name: string, id:number}[])>(`${this.apiUrl}/workstation-type`).pipe(
      map(res => res.map(ws => ({'name': ws.name, 'value': ws.id})))
    );
  }

}
