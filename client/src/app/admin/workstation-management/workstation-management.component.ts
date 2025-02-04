import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-workstation-management',
  imports: [TableModule, CommonModule, ToolbarModule, ButtonModule, Dialog, InputTextModule],
  templateUrl: './workstation-management.component.html',
  styleUrl: './workstation-management.component.css'
})
export class WorkstationManagementComponent {

  NewBtnDialog: boolean = false;

  showNewBtnDialog(){
    this.NewBtnDialog = true;
  }



  product:any[] = [];

  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json();
    this.product = data;
    this.NewBtnDialog = true;
  }
}
