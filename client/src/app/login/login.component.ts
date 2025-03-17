import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  // DI
  fb = inject(FormBuilder)

  // Properties
  LoginForm!:FormGroup;

  constructor(private auth:AuthService,){
    this.LoginForm = this.fb.group({
      email:["", Validators.required],
      password:["", Validators.required],
    });
  }

  LoginButton(){
    console.log(this.LoginForm.value);
  }





}
