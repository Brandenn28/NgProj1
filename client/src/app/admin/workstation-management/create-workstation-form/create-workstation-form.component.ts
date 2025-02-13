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
import { SelectModule } from 'primeng/select';
import { WorkstationPolicyService } from '../../../services/workstation-policy/workstation-policy.service';
import { WorkstationService } from '../../../services/workstation/workstation.service';



interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface Workstation {
  id: string,
  name: string,
  capacity:number,
  features:


}

@Component({
  selector: 'app-create-workstation-form',
  imports: [TableModule, CommonModule, ToolbarModule, ButtonModule, Dialog, InputTextModule, ToastModule,
    FileUpload, InputNumberModule,FormsModule, MultiSelectModule, ToastModule, SelectModule],
  providers:[MessageService],
  templateUrl: './create-workstation-form.component.html',
  styleUrl: './create-workstation-form.component.css'
})

export class CreateWorkstationFormComponent {
  
  //DI for workstation feature
  workstationService = inject(WorkstationService);
  workstationFeatures = inject(WorkstationFeaturesService);
  workstationType = inject(WorkstationTypeService);
  workstationAccess = inject(WorkstationAccessService);
  workstationPolicy = inject(WorkstationPolicyService);

  Features: any[] = [];
  // FeatureSelected: any[]=[];

  Type: string[] = [];
  // TypeSelected: string[] = [];

  Access: any[] = [];
  // AccessSelected: any[] = [];

  Policy: any[] = [];
  // PolicySelected: any[] = [];

  Enum_Availability: any[] = [];
  Enum_AvailabilitySelected: any[] =[];
  // Enum_AvailabilityDefault:any = '';

  constructor(private messageService: MessageService, private cd:ChangeDetectorRef) {    
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
    type:'',
    access: '',
    policy:'',
    availability:'',

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

    this.workstationPolicy.getPolicyForDropdown().subscribe(data=> {
      this.Policy = data;
      console.log(data);
    })
    this.workstationService.getAvailabilityForDropdown().subscribe(data=>{
      this.Enum_Availability = data;
      const defaultItem = this.Enum_Availability.find(
        data => data.name == 'Available'
      )
      
      if(defaultItem){
        this.workstation.availability = defaultItem || null;
        console.log('this', this.Enum_AvailabilitySelected);

      }
      // this.Enum_AvailabilitySelected = data;
      console.log(data);
    });
    
    
  }


}
