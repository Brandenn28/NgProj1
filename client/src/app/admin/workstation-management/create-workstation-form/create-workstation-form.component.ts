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
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { response } from 'express';

// interface UploadEvent {
//   originalEvent: Event;
//   files: File[];
// }

// interface Workstation {
//   id: string,
//   name: string,
//   capacity:number,
//   features:number,
// }

// const app = initializeApp();

@Component({
  selector: 'app-create-workstation-form',
  imports: [TableModule, CommonModule, ToolbarModule, ButtonModule, Dialog, InputTextModule, ToastModule,
    FileUpload, InputNumberModule, FormsModule, MultiSelectModule, ToastModule, SelectModule, AddItemsComponent, ReactiveFormsModule, WorkstationImageUploaderComponent, BlockUIModule, PanelModule],
  providers:[MessageService],
  templateUrl: './create-workstation-form.component.html',
  styleUrl: './create-workstation-form.component.css'
})



export class CreateWorkstationFormComponent {

  // Constructor initialised the formGroup 
  constructor(
    private messageService: MessageService,
    private cd:ChangeDetectorRef, 
    private wsFeature:WorkstationFeaturesService,
    private fb:FormBuilder)
    {
      this.newWSForm = this.fb.group({
        workstationId:["", Validators.required],
        name: ["", Validators.required],
        capacity: [0, Validators.required],
        features: new FormControl([], Validators.required),
        block: ["",Validators.required],
        level: ["",Validators.required],
        roomCode: ["",Validators.required],
        type: ["",Validators.required],
        access: new FormControl([], Validators.required),
        policies: new FormControl([], Validators.required),
        availability: ["",Validators.required],
        images: new FormControl([], Validators.required),
      });
    }

  //Dependency Injection
    workstationService = inject(WorkstationService);
    workstationFeatures = inject(WorkstationFeaturesService);
    workstationType = inject(WorkstationTypeService);
    workstationAccess = inject(WorkstationAccessService);
    workstationPolicy = inject(WorkstationPolicyService);
    private storage:Storage = inject(Storage);

    // private workstationBaseUrl = 'http://localhost:3000/workstation';
    

    //Coms with a field in child component
    formId!:number;
    // isSaving: boolean = true;
    isSaving: boolean = false;

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
      // console.log(data);
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

    successUrl:any [] = [];
   ///////////////////////////////////////// 

   ///Forms logic 

   //forms object
   newWSForm!:FormGroup;



    
  NewBtnDialog: boolean = false;

   ///////////////////////////////////////// 
  ///Submit functionality
  successImageUrl:string[] = [];
  failedImageUrl:string[]=[];

  getSuccessfulImageUrl(){
    this.imageUploader.successfulUploads = this.successUrl;
    console.log(this.successUrl);
  }

  getFailedImageUrl(value:string[]){
    this.failedImageUrl = value;
  }

  get imageFC():FormControl{
    return this.newWSForm.get('images') as FormControl;
  }

  updateParentFC(data:any[]){
    console.log("success");
    this.successUrl = data
    console.log(this.successUrl);
  }

  async newWorkstationEndpoint(data:any[]){
    console.log(data);
    this.workstationService.createWorkstation(data).subscribe({
      next: (response)=>{
        console.log("Endpoint response", response);
      },
      error: (error)=>{
        console.log("Endpoint error",error);
      },
    });

  }
  
  async submitNewWorkstation(){
    console.log(this.newWSForm.get('images')?.value);
    this.newWSForm.markAllAsTouched();
    this.messageService.clear();
    // const datass = [{
    //   "workstationId": "Test",
    //   "name": "Test1",
    //   "capacity": 22,
    //   "features": [
    //       {
    //           "name": "Projector",
    //           "value": 4
    //       }
    //   ],
    //   "block": "A",
    //   "level": "1",
    //   "roomCode": "@@22",
    //   "type": 1,
    //   "access": [
    //       {
    //           "name": "Students",
    //           "label": "ST"
    //       },
    //       {
    //           "name": "Staffs",
    //           "label": "SF"
    //       }
    //   ],
    //   "policies": [
    //       {
    //           "name": "Campus-wide Standard Policy",
    //           "label": "PID-CWIDE2HR"
    //       }
    //   ],
    //   "availability": "Available",
    //   "images": [
    //       "AIMFECS.png",
    //       "cal1.jpg"
    //   ]
    // } ];
    

    // this.newWorkstationEndpoint(datass);

    if(this.newWSForm.invalid){
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Ensure all fields are filled!',
      });
    }
    else{
      try{

        //Disables the form fields, save button, and image uploader
        // this.isSaving = true;
        this.imageUploader.isSaving = true;
        this.newWSForm.disable();

        // imageuploader child component function to upload the images to firebase.
        await this.imageUploader.cloudStorageUpload();

        this.NewBtnDialog = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Workstation added!',
        });
        //List of url that successfully uploaded for saving
        this.successImageUrl = this.imageUploader.successfulUploads;
        const workstationID = this.newWSForm.get('workstationId')?.value;
        const form = this.newWSForm.value;

        this.newWorkstationEndpoint(form);




         

      }catch(error){

      }


    // this.newWSForm.get("image")?.setValue(this.imageUploader.successfulUploads, {emitEvent:true});
    const type = this.newWSForm.get("type")?.value;
    // console.log(this.successImageUrl);
    // console.log(form);
    console.log(type);
    // console.log(workstationID);
  
  }
    
    
    // console.log(this.imageUploader.uploadedFiles);
    // console.log(this.successImageUrl);
    // console.log(this.failedImageUrl);
  }

  showNewBtnDialog(){

    // console.log(this.imageUploader.uploadedFiles);
    this.NewBtnDialog = true;
  }


  product:any[] = [];

  async ngOnInit(){

    this.loadFeatures();
    this.loadTypes();
    this.loadAccess();
    this.loadAvailability();
    this.loadPolicy();

    // const squi = ref(this.storage, 'squi.jpg');
    // getDownloadURL(squi)
    //   .then((url)=>console.log('image URL', url))
    //   .catch((error)=> console.log(error));
    // console.log(squi);
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json();
    this.product = data;
    // this.NewBtnDialog = true;
  


    
    
    
  }


}
