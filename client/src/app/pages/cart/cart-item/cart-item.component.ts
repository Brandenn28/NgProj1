import { Component, Input, input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  item = input.required<Product>();
  
}
