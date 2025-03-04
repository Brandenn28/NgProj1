import { ChangeDetectorRef, Component, computed, inject, Injectable, Input, Output, signal, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule} from 'primeng/inputtext';
import { FileUpload} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, AbstractFormGroupDirective, FormBuilder, Validators, ValueChangeEvent } from '@angular/forms';
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
import { getDownloadURL, getStorage,ref } from 'firebase/storage';
import { provideStorage, Storage } from '@angular/fire/storage';
import { initializeApp } from 'firebase/app';
import { WorkstationImageUploaderComponent } from "../../../components/image-uploader/workstation-image-uploader/workstation-image-uploader.component";
import { access } from 'node:fs';


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

// const app = initializeApp();

@Component({
  selector: 'app-create-workstation-form',
  imports: [TableModule, CommonModule, ToolbarModule, ButtonModule, Dialog, InputTextModule, ToastModule,
    FileUpload, InputNumberModule, FormsModule, MultiSelectModule, ToastModule, SelectModule, AddItemsComponent, ReactiveFormsModule, WorkstationImageUploaderComponent],
  providers:[MessageService],
  templateUrl: './create-workstation-form.component.html',
  styleUrl: './create-workstation-form.component.css'
})



export class CreateWorkstationFormComponent {

  //Dependency Injection
    workstationService = inject(WorkstationService);
    workstationFeatures = inject(WorkstationFeaturesService);
    workstationType = inject(WorkstationTypeService);
    workstationAccess = inject(WorkstationAccessService);
    workstationPolicy = inject(WorkstationPolicyService);
    private storage:Storage = inject(Storage);
    

    //Coms with a field in child component
    formId!:number;
    newWSForm!:FormGroup;



    //Add-item modal/dialog reference
    @ViewChild('addItemModal') addItemModal!:AddItemsComponent;
    @ViewChild('imageUploader') imageUploader!:WorkstationImageUploaderComponent;

    ///Add feature to workstation forms resources 
    //this function triggers the child component (dialog) to pop up
    Features:any = signal<{name: string, label: number}[]>([]);

    async openAddFeature(){
      this.addItemModal.dialogHeader = "Add new feature";
      this.formId = 1;
      this.addItemModal.fields = await this.workstationFeatures.featureFields();
      this.addItemModal.createForms();
      this.addItemModal.visible = true;
    }
    //Load the feature dropdown
    loadFeatures() {
      this.workstationFeatures.getFeaturesForDropdown().subscribe(data => {
        this.Features = data;
        // console.log('Loaded features:', this.Features);
      });
    }
    /////////////////////////////////////////

    /// Add Type of workstation resources
    Type: string[] = [];

    async openAddType(){
      this.addItemModal.dialogHeader = "Add new type";
      this.formId = 2;
      this.addItemModal.fields = await this.workstationType.typeFields();
      this.addItemModal.createForms();
      this.addItemModal.visible = true  ;

    }
    //Initial load of the dropdown
    loadTypes(){
      this.workstationType.getTypeDropDown().subscribe(data=>{
      this.Type = data;
      console.log(data);
      });
    }
    /////////////////////////////////////////
    
    ///add access to workstation resources
    Access:any =  signal<{name:string, label:number}[]>([]);

    loadAccess(){
      this.workstationAccess.getAccessDropdown().subscribe(data=>{
      this.Access = data;
      })
    }

    async openAddAccess(){
      this.addItemModal.dialogHeader = "Add new access";
      this.formId = 3;
      this.addItemModal.fields = await this.workstationAccess.accessFields();
      this.addItemModal.createForms();
      this.addItemModal.visible = true;
    }
    /////////////////////////////////////////

    ///availability resources

    Availability:any [] = [];

    loadAvailability(){
      this.workstationService.getAvailabilityForDropdown().subscribe(data=>{
        this.Availability = data;
      });
    }
    /////////////////////////////////////////

    ///Policy resources
    Policy:any = signal<{name:string, policyId:string}[]>([]);

    loadPolicy(){
      this.workstationPolicy.getPolicyForDropdown().subscribe(data=> {
        this.Policy = data;
        // console.log(data);
      });
    }
    /////////////////////////////////////////


    ///Child @Output emits the formId that is being submitted and refresh according to the dropdown.
    reloadDDAfterAdd(val:number){
      if(val === 1 ){
        this.loadFeatures();
      }
      else if(val === 2){
        this.loadFeatures();
      }
      else if(val ===3){
        this.loadAccess();
      }
      else if(val === 4){

      }
      else if(val === 5){

      }
    }
    /////////////////////////////////////////

    // Uploaded files resources
    uploadedImages:any [] = [];
   ///////////////////////////////////////// 

  //Create new workstation (Reactive Forms)
  // NewWorkstationForm = new FormGroup({
  //   name: new FormControl<string>(''),
  //   id: new FormControl<string>(''),
  //   capacity: new FormControl<number>(0),
  //   features: new FormControl([]),
  //   block: new FormControl(''),

  // })

  constructor(
    private messageService: MessageService,
    private cd:ChangeDetectorRef, 
    private wsFeature:WorkstationFeaturesService,
    private fb:FormBuilder)
    {
      this.newWSForm = this.fb.group({
        workstationId:["", Validators.required],
        name:["", Validators.required],
        capacity:["", Validators.required],
        features:this.fb.array([], Validators.required),
        block: ["",Validators.required],
        level: ["",Validators.required],
        roomCode: ["",Validators.required],
        type: this.fb.array([]),
        access: this.fb.array([], Validators.required),
        policies: this.fb.array([], Validators.required),
        availability: ["",Validators.required],
        // images: this.fb.array([]),
      });
    }

  NewBtnDialog: boolean = false;


  submitNewWorkstation(){
    // this.uploadedImages = this.imageUploader.uploadedFiles

    const id = this.newWSForm.get("workstationId")?.value;
    console.log(id);
    // console.log(this.imageUploader.uploadedFiles);
  }

  showNewBtnDialog(){

    // console.log(this.imageUploader.uploadedFiles);
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

    this.loadFeatures();
    this.loadTypes();
    this.loadAccess();
    this.loadAvailability();
    this.loadPolicy();

    const squi = ref(this.storage, 'squi.jpg');
    getDownloadURL(squi)
      .then((url)=>console.log('image URL', url))
      .catch((error)=> console.log(error));
    console.log(squi);
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json();
    this.product = data;
    // this.NewBtnDialog = true;
  


    
    
    
  }


}
