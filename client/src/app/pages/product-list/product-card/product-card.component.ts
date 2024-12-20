import { Component, signal, input, output, inject } from '@angular/core';
import { Product } from '../../../models/product.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  cartService = inject(CartService);
  // message = input('default');
  product = input.required<Product>();
}
