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
    return this.http.get<({name:string, id:number}[])>(`${this.apiUrl}/workstation-features`).pipe(
      map(response => response.map(ws => ({'name': ws.name, 'value': ws.id})))
    );
    // return 'Get features successful';
  }

  setNewFeatureItemDD(item:string){
    return this.http.post(`${this.apiUrl}/workstation-features/newFeatureDD`, {name:item});
  }

  featureFields(){
    const f = [
      {label: 'FeatureName', name:'Feature Name:',type:'pInputText', placeholder:'Enter feature', required:true},
    ]
    return f;
  }


  // getWorkstations(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/workstations`);
  // }
}
