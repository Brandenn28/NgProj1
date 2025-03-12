import { Component } from '@angular/core';
import { CreateWorkstationFormComponent } from './create-workstation-form/create-workstation-form.component';
import { CardModule } from 'primeng/card';
import { RouterLink, RouterModule } from '@angular/router';




@Component({
  selector: 'app-workstation-management',
  imports: [CreateWorkstationFormComponent, CardModule, RouterLink,RouterModule],
  templateUrl: './workstation-management.component.html',
  styleUrl: './workstation-management.component.css'
})
export class WorkstationManagementComponent {

}
