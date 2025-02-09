import { Component, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule} from 'primeng/inputtext';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { features } from 'node:process';


@Component({
  selector: 'app-create-workstation-form',
  imports: [TableModule, CommonModule, ToolbarModule, ButtonModule, Dialog, InputTextModule, ToastModule,
    FileUpload, InputNumberModule,FormsModule],
  templateUrl: './create-workstation-form.component.html',
  styleUrl: './create-workstation-form.component.css'
})
export class CreateWorkstationFormComponent {
  NewBtnDialog: boolean = false;

  showNewBtnDialog(){
    this.NewBtnDialog = true;
  }

  workstation={
    name:'',
    id:'',
    capacity: '',
    features: '',
    block:'',
    level:'',
    roomCode:'',
    availability: '',
    type:'',
    access: '',

  };

  product:any[] = [];

  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json();
    this.product = data;
    this.NewBtnDialog = true;
  }
}
