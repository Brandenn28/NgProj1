import { Component, EventEmitter, inject, Input,Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { WorkstationFeaturesService } from '../../../../services/workstation-features/workstation-features.service';
import { response } from 'express';
import { WorkstationTypeService } from '../../../../services/workstation-type/workstation-type.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-items',
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule, MessageModule, NgIf],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.css'
})
export class AddItemsComponent {

  private formBuilder = inject(FormBuilder);
  workstationFeature = inject(WorkstationFeaturesService);
  workstationType = inject(WorkstationTypeService);

  visible: boolean = false;

  showDialog(){
    // console.log(this.fields);
    this.visible = true;
  }


  @Input() dialogHeader:string = 'Add Item';
  // @Input() fields: {label:string; name:string; type:string; placeholder?:string; required?:boolean}[]=[];
  @Input() fields: any[] = [];
  @Input() formId!:number;
  @Output() saveEmitter = new EventEmitter<number>();

  reloadComponent(val:number){
    this.saveEmitter.emit(val);
  }


  form:FormGroup = new FormGroup({});

  createForms(){
    const formFields:any = {};
    
    if(this.fields){
      this.fields.forEach(f => {
        let validateArr = [];
  
        if (f.required){
          validateArr.push(Validators.required);
        }
  
        // if (f.minLength) {
        //   validators.push(Validators.minLength(f.minLength));
        // }
    
        // if (f.maxLength) {
        //   validators.push(Validators.maxLength(f.maxLength));
        // }
    
        // if (f.pattern) {
        //   validators.push(Validators.pattern(f.pattern));
        // }
        formFields[f.label] = new FormControl('', Validators.required);
  
        // formFields[f.label]= new FormControl('');
        // formFields[f.type]= new FormControl('');
      });
    }
    
    this.form = new FormGroup(formFields);
    // console.log(this.fields);
  }
  async submitForm(){
    if(this.formId === 1){
      console.log("CLick");
      // this.createForms();
      try{
        const val = this.form.get('FeatureName')?.value;
        this.workstationFeature.setNewFeatureItemDD(val).subscribe(
          (response)=>{
            console.log('success');
            this.reloadComponent(1);
          }
        );
      }catch (error){
        console.log('error');
      }
    }
    else if(this.formId === 2){
      console.log("CLick2");
      // this.createForms();
      try{
        const val = this.form.get('TypeName')?.value;
        console.log(val);
        console.log(this.fields);
        this.workstationType.addNewTypeDD(val).subscribe(
          (response)=>{
            this.reloadComponent(2);
          }
        );
      }catch (error){
        console.log('error');
      }
    }
    else if(this.formId === 3){

    }
      

    
  }

  ngOnInit() {
    // this.createForms(); 
    // console.log(this.form);

    // console.log(this.form);
  }
  // addItemForm = new FormGroup({
  //   ExampleName: new FormControl(),
  //   ExampleID: new FormControl(),
  // });

  
  

  // const input = signal(0);
  

}
