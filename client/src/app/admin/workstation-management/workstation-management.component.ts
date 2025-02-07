import { Component } from '@angular/core';
import { CreateWorkstationFormComponent } from './create-workstation-form/create-workstation-form.component';




@Component({
  selector: 'app-workstation-management',
  imports: [CreateWorkstationFormComponent],
  templateUrl: './workstation-management.component.html',
  styleUrl: './workstation-management.component.css'
})
export class WorkstationManagementComponent {

}
