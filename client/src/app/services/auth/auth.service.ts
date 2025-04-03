import { inject, Injectable, NgZone } from '@angular/core';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { setPersistence, signInWithCredential } from 'firebase/auth';
import { FirebaseService } from '../firebase/firebase.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { verify } from 'crypto';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


interface VerifyTokenResponse {
  success: boolean;
  user?: {
    uid: string;
    email: string;
    name?: string;
  };
  error?: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private auth:Auth, 
    private router:Router, 
    private ngZone:NgZone, 
    private http:HttpClient){
    }
  firebaseService = inject(FirebaseService);

  private apiUrl = 'http://localhost:3000';

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
      
      const userCred = await signInWithEmailAndPassword(this.auth, email, password);
      const token = await userCred.user.getIdToken();
      const t = "f"
      this.http.post<VerifyTokenResponse>(`${this.apiUrl}/firebase/verifyIdToken`, {'idToken': token}).subscribe({
        next:(n)=>{
          console.log("Firebase ID token", token);
          if(n?.success){
            this.router.navigate(['/admin/workstation-management']);
          }else{
            alert("Router Navigate Error");
          }
        },
        error:(e)=>{
          console.log(e)
        }
      });
    }catch(error){
      console.log("Login Error");
    };
  }

  ngOnInIt(){
    
  }
}
