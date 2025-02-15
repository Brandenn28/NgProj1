import { Component, EventEmitter, Input,Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-items',
  imports: [DialogModule, ButtonModule, InputTextModule],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.css'
})
export class AddItemsComponent {

  visible: boolean = false;

  showDialog(){
    this.visible = true;
  }

  @Input() dialogHeader:string = 'Add Item';
  @Input() fields: {label:string; name:string; type:string; placeholder?:string}[]=[];
  @Output() saveEmitter = new EventEmitter<string>();

  saveItem(item:string){
    this.saveEmitter.emit(item)
  }

  form:FormGroup = new FormGroup({});

  createForms(){
    const formFields:any = {};

    this.fields.forEach(f => {
      formFields[f.name] = new FormControl('');
      formFields[f.label]= new FormControl('');
      formFields[f.type]= new FormControl('');
    });
    this.form = new FormGroup(formFields);

  }

  addItemForm = new FormGroup({
    FormName: new FormControl(),
    FormId: new FormControl(),
  });

  
  

  // const input = signal(0);
  

}
