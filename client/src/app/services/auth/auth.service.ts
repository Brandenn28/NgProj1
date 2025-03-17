import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithCredential } from 'firebase/auth';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  auth:Auth = inject(Auth);
  router = inject(Router);
  //  email = "test.workhub@workhub.com";
  //  password = "testworkhub";

  async register(email:string, password:string){
    try{
      const userCred = await createUserWithEmailAndPassword(this.auth, email, password)
        return userCred; 
    }catch(error){
      throw error;
    }
  } 

  async login(email:string, password:string){
    try{
      const loginCred = await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/admin/workstation-management']);
      return loginCred;
    }catch(error){
      throw error;
    }
  }

  async isTokenExpired(){
    return true;
  }
  // const userCredential = await signInWithEmailAndPassword(auth, email, password);
  constructor() {}

  ngOnInIt(){
    // this.register(this.email, this.password);
    // console.log("login endpoint")
  }
}
