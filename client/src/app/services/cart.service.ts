import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

//'root' means it can be used globally

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart = signal<Product[]>([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 109.2,
      image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      stock:0,
    },
    {
      id: 2,
      title:"Mens Casual Premium Slim Fit T-Shirts ",
      price: 109.2,
      image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      stock:10,
    },
  ]);
  //product: Product means it accepts a Product object
  addToCart(product: Product){
    //...this or ... is spread operator used for array it allows to create a copy of the array, adding new elements while keeping the original elements intact.
    this.cart.set([...this.cart(), product]);
  }
  //Same thing in cpp getter method. this.cart, the 'this' keyword means a field or variable
  getCartItems(): Product[]{
    return this.cart();
  }
  constructor() { }
}
