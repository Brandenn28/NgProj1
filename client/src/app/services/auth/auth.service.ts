import { inject, Injectable, NgZone } from '@angular/core';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithCredential } from 'firebase/auth';
import { FirebaseService } from '../firebase/firebase.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // auth:Auth = inject(Auth);
  // router = inject(Router);
  // ngZone = inject(NgZone);
  //  email = "test.workhub@workhub.com";
  //  password = "testworkhub";
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
      const token = userCred.user.getIdToken();
      const t = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwODA2N0ZWZhNWI2YTNlMDkiLCJ0eXAiOiJKV1Qif";
      const verifyIdToken = await this.http.post(`${this.apiUrl}/firebase/verifyIdToken`, t);
      console.log("auth.service", verifyIdToken);
      if(await this.http.post(`${this.apiUrl}/firebase/verifyIdToken`, t)){
        this.ngZone.run(()=>{
          this.router.navigate(['/admin/workstation-management']);
        });
      }else{
        throw new Error('Auth.service.error');
      }
      // return (userCred.user.getIdToken());
    }catch(error){
      throw error;
    }
  }


  // const userCredential = await signInWithEmailAndPassword(auth, email, password);
  constructor(
    private auth:Auth, 
    private router:Router, 
    private ngZone:NgZone, 
    private http:HttpClient){


    }

  ngOnInIt(){
    // this.register(this.email, this.password);
    // console.log("login endpoint")
  }
}
