import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  summary = computed(()=>{
    let total = 0;
    this.cartService.cart().forEach(item => {
      total += item.price;
    });
    return total.toFixed(2);
  })
  
}
