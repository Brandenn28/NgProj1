import { Component, signal, input, output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
product = input.required<Product>();
}
