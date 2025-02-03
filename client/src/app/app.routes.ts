import { Routes } from '@angular/router';
import path from 'path'; 
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { AppComponent } from './app.component';


export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: ()=>
        import('./pages/product-list/product-list.component').then(m=>m.ProductListComponent)
},
{
    path:'cart',
    loadComponent: ()=>
        import('./pages/cart/cart.component').then(m=>m.CartComponent)
},
{
    path:'admin/workstation-management',
    loadComponent: ()=>
        import('./admin/workstation-management/workstation-management.component').then(m=>m.WorkstationManagementComponent)
},  
{
    path:'admin/dashboard',
    loadComponent: ()=>
        import('./admin/dashboard/dashboard.component').then(m=>m.DashboardComponent)
},
];
