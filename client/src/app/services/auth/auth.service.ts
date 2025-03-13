import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { 
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
}
