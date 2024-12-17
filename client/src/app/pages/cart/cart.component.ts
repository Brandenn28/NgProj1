import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItem=inject(CartService);  

  // get CartItems(): Product[]{
  // *check if timeout
  //   return this.cartItem.cart();
  // }
  // get TestingGettingCartItems(): Product[]{
  //   return this.cartItem.cart();
  // }
}
