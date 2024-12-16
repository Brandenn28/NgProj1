import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

//'root' means it can be used globally

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart = signal<Product[]>([]);
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
