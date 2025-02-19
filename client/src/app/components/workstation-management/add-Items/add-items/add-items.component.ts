import { Component, EventEmitter, inject, Input,Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { WorkstationFeaturesService } from '../../../../services/workstation-features/workstation-features.service';
import { response } from 'express';


@Component({
  selector: 'app-add-items',
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule, MessageModule],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.css'
})
export class AddItemsComponent {

  private formBuilder = inject(FormBuilder);
  workstationFeature = inject(WorkstationFeaturesService);


  visible: boolean = false;

  showDialog(){
    this.visible = true;
  }

  @Input() dialogHeader:string = 'Add Item';
  @Input() fields: {label:string; name:string; type:string; placeholder?:string; required?:boolean}[]=[];
  @Output() saveEmitter = new EventEmitter<string>();

  saveItem(){
    this.saveEmitter.emit();
  }


  form:FormGroup = new FormGroup({});

  createForms(){
    const formFields:any = {};

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
    this.form = new FormGroup(formFields);
    console.log(this.fields);
  }
  async submitForm(){
    try{
      const val = this.form.get('FeatureName')?.value;
      this.workstationFeature.setNewFeatureItemDD(val).subscribe(
        (response)=>{
          console.log('success');
          this.saveItem();
        }
      );
    }catch (error){
      console.log('error');
    }
  }

  ngOnInit() {
    this.createForms(); 
    console.log(this.fields);

    // console.log(this.form);
  }
  // addItemForm = new FormGroup({
  //   ExampleName: new FormControl(),
  //   ExampleID: new FormControl(),
  // });

  
  

  // const input = signal(0);
  

}
