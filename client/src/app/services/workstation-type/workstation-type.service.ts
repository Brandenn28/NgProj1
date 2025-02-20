import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkstationTypeService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getTypeDropDown(): Observable<any>{
    return this.http.get<({name: string, id:number}[])>(`${this.apiUrl}/workstation-type`).pipe(
      map(res => res.map(ws => ({'name': ws.name, 'label': ws.id})))
    );
  }

  addNewTypeDD(value:string): Observable<any>{
    return this.http.post(`${this.apiUrl}/workstation-type/newTypeDD`, {name:value});
  }
  async typeFields(){
    const f = [
      {label: 'TypeName', name: 'Type Name', type: 'pInputText', placeholder:'Enter type', required:true},
    ]
    return f;
  }

}
