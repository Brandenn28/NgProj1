import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, ButtonModule, ToastModule],
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  // DI
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  messageService = inject(MessageService);

  // Properties
  LoginForm:FormGroup;
  isLoggingIn: boolean = false;

  constructor(private auth: AuthService) {
    this.LoginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]], // Validators as an array
      password: ["", [Validators.required]], // Validators as an array
    });
  }

  async LoginButton(){

    this.LoginForm.markAllAsTouched();
    this.messageService.clear();
    this.isLoggingIn = true;
    // this.LoginForm.disable();
    // console.log(this.LoginForm.value);
    // console.log(this.LoginForm.invalid);
    // console.log(this.LoginForm.errors);
    // console.log('Email Control Errors:', this.LoginForm.get('email')?.errors);
    // console.log('Password Control Errors:', this.LoginForm.get('password')?.errors);
    if(this.LoginForm.invalid){
      console.log("fill in the details");
      this.messageService.add({
        severity:'error',
        summary:'Error',
        detail:'Fill in the empty details',
      });
      this.isLoggingIn = false;
      // this.LoginForm.reset();
      this.LoginForm.enable();
    }else{
      this.LoginForm.disable();
      const email = this.LoginForm.get('email')?.value;
      const password = this.LoginForm.get('password')?.value;
      try{
        const auth = await this.authService.login(email, password);
        const idToken = auth.getIdToken();
        console.log("thisIdTokent", idToken);
        console.log(auth);
        this.LoginForm.reset();
        this.LoginForm.enable();
        this.isLoggingIn = false;
      }catch(error){
        this.messageService.add({
          severity:'error',
          summary:'Error Authentication',
          detail:'Unable to verify credentials'
        });
        this.LoginForm.get('password')?.reset();
        this.isLoggingIn = false;
        this.LoginForm.enable();
      }
    }
  }
}
