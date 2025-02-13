import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkstationPolicyService {
  
  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:3000';
  
  getPolicyForDropdown(){
    return this.http.get<({name:string, policyId: string}[])>(`${this.apiUrl}/workstation-policy`).pipe(
      map(response => response.map(ws=>({'name': ws.name, 'label': ws.policyId})))
    );
  }
  
}
