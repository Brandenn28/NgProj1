import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithCredential } from 'firebase/auth';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  auth:Auth = inject(Auth);

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
      return loginCred;
    }catch(error){
      throw error;
    }
  }

  
  // const userCredential = await signInWithEmailAndPassword(auth, email, password);
  constructor() {}

  ngOnInIt(){
    // this.register(this.email, this.password);
    // console.log("login endpoint")
  }
}
