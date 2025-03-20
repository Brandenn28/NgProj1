import { Inject, Injectable } from '@nestjs/common';
import { error } from 'console';
import * as admin from 'firebase-admin';
import { Auth } from 'firebase-admin/lib/auth/auth';
import * as path from 'path';
import { zip } from 'rxjs';
// import { resolve } from 'path';

@Injectable()
export class FirebaseService {
    // serviceAccountPath = path.resolve(__dirname, '../private-key/firebase/firebase-key.json');
    private admin: typeof admin;
    constructor() {
        try {
          // Initialize Firebase Admin SDK
          const serviceAccount = require('../../private-keys/firebase-key.json');
          this.admin = admin;
    
          // Check if Firebase app is already initialized
          if (this.admin.apps.length === 0) {
            this.admin.initializeApp({
              credential: admin.credential.cert(serviceAccount),
            });
            console.log('Firebase initialized successfully');
          } else {
            console.log('Firebase already initialized');
          }
    
          // Log Firebase apps to verify initialization
          console.log('Firebase apps:', this.admin.apps);
        } catch (error) {
          console.error('Error initializing Firebase:', error.message);
          throw new Error('Failed to initialize Firebase');
        }
      }
    
    // constructor(){
    //     // var admin = require("firebase-admin");
    //     var serviceAccount = require("../../private-keys/firebase-key.json");
    //     // var serviceAccount = path.resolve(__dirname, './private-key/firebase/firebase-key.json')
    //     this.admin = admin;
        
    //     admin.initializeApp({
    //         credential:admin.credential.cert(serviceAccount)
    //     });
    //     const toke = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwODA2N2Q4M2YwY2Y5YzcxNjQyNjUwYzUyMWQ0ZWZhNWI2YTNlMDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd29ya2h1YjI0Ny00ZDhjYSIsImF1ZCI6IndvcmtodWIyNDctNGQ4Y2EiLCJhdXRoX3RpbWUiOjE3NDI0MjY3MzksInVzZXJfaWQiOiJuR0prNW5kTnRyWW9pcFQ1R1k2dnFUbkJjUjAyIiwic3ViIjoibkdKazVuZE50cllvaXBUNUdZNnZxVG5CY1IwMiIsImlhdCI6MTc0MjQyNjczOSwiZXhwIjoxNzQyNDMwMzM5LCJlbWFpbCI6ImFkbWluLndvcmtodWJAd29ya2h1Yi5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW4ud29ya2h1YkB3b3JraHViLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F9dOgAJI8zczd7sRou-Nh24fYru9Xtx4lrW8LN2KvPER5K2A0YHqTkEX2erOcRUC3eUD6rap6gjPn5t1LxBy7xPhOULmPgxSDqGrzWMeSUKWCGEA-yIUf5Fb2AtEia3vw7OZ9Q8iY_54EqD6-Zz7HqeVE5UAP-wAgZfNAtHEfINpVcrPoua6hikXC6R6_r0t42SfDr1KZH3eMxDntLwtkJBkd6WaikllVuB4c-qIX2ByXB7brw8DFxEkVa0uy8NM4A73AVCaqJ-idVfy3qH4KEeb_g9U7D8RkcesJlGCTu8wkzJ74wuQVGfoapeLwmVQXwhLK633JfYPSsb6eL7EBg"
    //     // console.log("thus" ,admin.auth().verifyIdToken(toke));
    //     console.log(admin);
    // }


    // async verifyIdToken(token){

    //     try{
    //         const idToken = await admin.auth().verifyIdToken(token);
    //         return true;
    //         // return idToken;
    //     }catch(error){
    //         throw new Error('Invalid Token');
    //     }
    // }

    async verifyIdToken(token: string): Promise<boolean> {
        try {
          console.log('Token being verified:', token);
    
          // Verify the ID token
          const decodedToken = await this.admin.auth().verifyIdToken(token);
          console.log('Decoded Token:', decodedToken);
    
          return true; // Token is valid
        } catch (error) {
          console.error('Error verifying token:', error.message);
          throw new Error(`Invalid Token: ${error.message}`);
        }
      }

      
    
}

