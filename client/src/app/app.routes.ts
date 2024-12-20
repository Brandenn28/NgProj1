import { Routes } from '@angular/router';
import path from 'path'; 
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { AppComponent } from './app.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ProductListComponent
},
{
    path:'cart',
    component: CartComponent
},
];
