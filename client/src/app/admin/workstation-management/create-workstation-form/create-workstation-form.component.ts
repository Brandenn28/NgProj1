import { ChangeDetectorRef, Component, inject, Injectable, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule} from 'primeng/inputtext';
import { FileUpload} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { features } from 'node:process';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessageService } from 'primeng/api';
import { WorkstationFeaturesService } from '../../../services/workstation-features/workstation-features.service';
import { ThemeService } from '@primeng/themes';
import { error } from 'node:console';
import { WorkstationTypeService } from '../../../services/workstation-type/workstation-type.service';
import { WorkstationAccessService } from '../../../services/workstation-access/workstation-access.service';


interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-create-workstation-form',
  imports: [TableModule, CommonModule, ToolbarModule, ButtonModule, Dialog, InputTextModule, ToastModule,
    FileUpload, InputNumberModule,FormsModule, MultiSelectModule, ToastModule],
  providers:[MessageService],
  templateUrl: './create-workstation-form.component.html',
  styleUrl: './create-workstation-form.component.css'
})

export class CreateWorkstationFormComponent {
  
  //DI for workstation feature
  workstationFeatures = inject(WorkstationFeaturesService);
  workstationType = inject(WorkstationTypeService);
  workstationAccess = inject(WorkstationAccessService);
  // workstationAvailability = inject(Work);

  Features: any[] = [];
  FeatureSelected: any[]=[];

  Type: string[] = [];
  TypeSelected: string[] = [];

  Access: any[] = [];
  AccessSelected: any[] = [];

  City:any[] = [];

  constructor(private messageService: MessageService, private cd:ChangeDetectorRef) {
    this.City = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'},
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
    
  }

  onUpload(event: UploadEvent){
    this.messageService.add({severity: 'info', summary: 'success', detail:'Uploaded'});
  }

  NewBtnDialog: boolean = false;

  showNewBtnDialog(){
    this.NewBtnDialog = true;
  }

  workstation = {
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
  formGroup!: FormGroup;

  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json();
    this.product = data;
    this.NewBtnDialog = true;
   
    //Retrieving features from backend to the front end dropdown
    this.workstationFeatures.getFeaturesForDropdown().subscribe(data => {
      this.Features = data;
      console.log(data);
    });

    this.workstationType.getTypeDropDown().subscribe(data=>{
      this.Type = data;
      console.log(data);
    })

    this.workstationAccess.getAccessDropdown().subscribe(data => {
      this.Access = data;
      console.log(data);
    })
    
  }


}
