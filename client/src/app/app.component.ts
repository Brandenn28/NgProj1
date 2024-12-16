import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports:[HeaderComponent],
  template: `<app-header></app-header>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('Test angularEcommerce');
}