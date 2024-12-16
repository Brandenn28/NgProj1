import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ProductListComponent } from '../../pages/product-list/product-list.component';


@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, ProductListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showButtonClick(){
    alert("This button is clicked in header");
  }
}
