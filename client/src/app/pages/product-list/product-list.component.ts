import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "./product-card/product-card.component";
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.2,
      image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      stock:0,
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.2,
      image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      stock:10,
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.2,
      image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      stock:10,
    },
    {
      id: 4,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.2,
      image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      stock:0,
    },
  ])
}
