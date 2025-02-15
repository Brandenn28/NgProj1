import { ChangeDetectorRef, Component, inject, Injectable, Input, Output, signal, ViewChild } from '@angular/core';
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
import { Observable, startWith } from 'rxjs';
import { AddItemsComponent } from '../../../components/workstation-management/add-Items/add-items/add-items.component';




interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface Workstation {
  id: string,
  name: string,
  capacity:number,
  features:number,
}
@Component({
  selector: 'app-create-workstation-form',
  imports: [TableModule, CommonModule, ToolbarModule, ButtonModule, Dialog, InputTextModule, ToastModule,
    FileUpload, InputNumberModule,FormsModule, MultiSelectModule, ToastModule, SelectModule, AddItemsComponent],
  providers:[MessageService],
  templateUrl: './create-workstation-form.component.html',
  styleUrl: './create-workstation-form.component.css'
})


export class CreateWorkstationFormComponent {

  //Add-item modal/dialog
  @ViewChild('addItemModal') addItemModal!:AddItemsComponent;
  openAddItem(){
    this.addItemModal.visible = true ;
    this.addItemModal.dialogHeader = "Add New Feature";
    this.addItemModal.fields = this.featureFields;
  }

  featureFields = [
    {label: 'name', name:'Feature Name:',type:'pInputText', placeholder:'Enter feature'}
  ]

  saveFeatureItem(item:string){
    console.log(item);
  };

  // @Input() addItemHeader = ('');
  
  //Dependency Injection
  workstationService = inject(WorkstationService);
  workstationFeatures = inject(WorkstationFeaturesService);
  workstationType = inject(WorkstationTypeService);
  workstationAccess = inject(WorkstationAccessService);
  workstationPolicy = inject(WorkstationPolicyService);

  //Create new workstation (Reactive Forms)
  NewWorkstationForm = new FormGroup({
    name: new FormControl<string>(''),
    id: new FormControl<string>(''),
    capacity: new FormControl<number>(0),
    features: new FormControl([]),
    block: new FormControl(''),

  })


  Features:any = signal<{name: string, label: number}[]>([]);
  // Features: any[] = [];
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
  // FeatureOption$ = Observable<{'name':string,'value':number}[]>;



  constructor(
    private messageService: MessageService,
    private cd:ChangeDetectorRef, 
    private wsFeature:WorkstationFeaturesService) {   
    // this.FeatureOption$ = this.wsFeature.getFeaturesForDropdown().pipe(
    //   startWith([])
    // );
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
