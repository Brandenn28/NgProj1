import { Component } from '@angular/core';
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

  visible: boolean = true;
  showDialog(){
    this.visible = true;
  }
}
