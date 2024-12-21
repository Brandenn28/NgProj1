import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json();
    this.products.set(data);
  }


  testmsg = signal('thisistestmsg');
  products = signal<Product[]>([
    // {
    //   id: 1,
    //   title: "Fjallraven - Foldsack No. 1 Backpack",
    //   price: 109.2,
    //   image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //   stock:0,
    // },
    // {
    //   id: 2,
    //   title:"Mens Casual Premium Slim Fit T-Shirts ",
    //   price: 109.2,
    //   image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //   stock:10,
    // },
    // {
    //   id: 3,
    //   title: "Mens Cotton Jacket",
    //   price: 112,
    //   image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //   stock:67,
    // },
    // {
    //   id: 4,
    //   title: "Mens Casual Slim Fit",
    //   price: 430,
    //   image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    //   stock:0,
    // },
    // {
    //   id: 5,
    //   title: "John Hardy Women's Legends Bracelet",
    //   price: 695,
    //   image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    //   stock:12,
    // },
    // {
    //   id: 6,
    //   title: "Solid Gold Petite Micropave ",
    //   price: 168,
    //   image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    //   stock:42,
    // },
    // {
    //   id:7,
    //   title: "Pierced Owl Rose Gold Plated Stainless ",
    //   price: 10.99,
    //   image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    //   stock:22,
    // },
    // {
    //   id:8,
    //   title: "White Gold Plated Princess",
    //   price: 999,
    //   image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    //   stock:12,
    // }
  ])
}
