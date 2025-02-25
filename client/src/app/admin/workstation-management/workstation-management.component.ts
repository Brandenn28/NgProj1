import { Component } from '@angular/core';
import { CreateWorkstationFormComponent } from './create-workstation-form/create-workstation-form.component';
import { CardModule } from 'primeng/card';




@Component({
  selector: 'app-workstation-management',
  imports: [CreateWorkstationFormComponent, CardModule],
  templateUrl: './workstation-management.component.html',
  styleUrl: './workstation-management.component.css'
})
export class WorkstationManagementComponent {

}
