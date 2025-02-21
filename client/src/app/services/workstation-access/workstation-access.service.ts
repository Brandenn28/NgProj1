import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkstationAccessService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getAccessDropdown(){
    return this.http.get<({name:string, rolesId:string})[]>(`${this.apiUrl}/workstation-access`).pipe(
      map(res => res.map(ws=>({'name': ws.name, 'label': ws.rolesId})))
    );
  }

  setAddAccessDD(n:string, rId:string): Observable<any>{
    return this.http.post(`${this.apiUrl}/workstation-access/newAccessDD`,{
      name:n,
      rolesId:rId
    });
  }

  accessFields(){
    const f = [
      {label: 'AccessName', name:'Access Name:', type:'pInputText', placeholder:'Enter Access', required: true },
      {label: 'AccessId', name:'Access Id:', type:'pInputText', placeholder:'Enter ID', required: true },
      
    ]

    return f;
  }
}
