import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workstation-management',
  imports: [TableModule, CommonModule],
  templateUrl: './workstation-management.component.html',
  styleUrl: './workstation-management.component.css'
})
export class WorkstationManagementComponent {

  product:any[] = [];

  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json();
    this.product = data;
  }
}
