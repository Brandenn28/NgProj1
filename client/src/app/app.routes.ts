import { Routes } from '@angular/router';
import path from 'path'; 
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { loginGuardGuard } from './guards/LoginGuard/login-guard.guard';


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
// {
//     path:'admin/workstation-management',
//     loadComponent: ()=>
//         import('./admin/workstation-management/workstation-management.component').then(m=>m.WorkstationManagementComponent)
// },  
{
    path:'admin/dashboard',
    loadComponent: ()=>
        import('./admin/dashboard/dashboard.component').then(m=>m.DashboardComponent)
},
{
    path:'admin/workstation-management/workstation',
    loadComponent: ()=>
        import('./admin/workstation-management/workstation/workstation.component').then(m=>m.WorkstationComponent)
},
{
    path:'login',
    loadComponent: ()=>
        import('./layouts/login-layout/login-layout.component').then(m=>m.LoginLayoutComponent),
    children:[
        {path: '',component: LoginComponent},
    ],
},
{
    path: 'admin', // Parent route for all admin-related routes
    component: AdminLayoutComponent, // Apply admin layout here
    children: [
      {
        path: 'workstation-management',
        loadComponent: () =>
          import('./admin/workstation-management/workstation-management.component').then(
            (m) => m.WorkstationManagementComponent
          )
      },
      // Other admin routes can go here
    ]
},
];
