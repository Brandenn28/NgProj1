import { Component, signal, output, EventEmitter, input } from '@angular/core';


@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();

}