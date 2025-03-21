import { Injectable } from '@nestjs/common';
import { error } from 'console';
import * as admin from 'firebase-admin';
import { Auth } from 'firebase-admin/lib/auth/auth';
import * as path from 'path';
import { zip } from 'rxjs';
// import { resolve } from 'path';
// import { Injectable } from '@nestjs/common';
@Injectable()

export class FirebaseService {

    private admin: typeof admin;
    // auth:Auth = Inject(Auth);
    constructor(){
        try{
            const serviceAccount = require('../../firebase-key.json');
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
                // console.log('Firebase apps:', this.admin.apps);

        }catch(error){
            console.error('Error initializing Firebase:', error.message);
            throw new Error('Failed to initialize Firebase');
            // throw new error("Firebase Auth service SS");
        }
    }


    async verifyIdToken(token): Promise<boolean> {
        try {
          const decodedToken = await this.admin.auth().verifyIdToken(token);
        //   console.log('Decoded Token:', decodedToken);
          return true;
        } catch (error) {
        //   console.error('Error verifying token:', error.message);
        //   throw new Error(`Invalid Token: ${error.message}`);
          return false;
      }
    }


        // constructor() {
    //     try {
    //       // Initialize Firebase Admin SDK
    //       const serviceAccount = require('../../private-keys/firebase-key.json');
    //       this.admin = admin;
    
    //       // Check if Firebase app is already initialized
    //       if (this.admin.apps.length === 0) {
    //         this.admin.initializeApp({
    //           credential: admin.credential.cert(serviceAccount),
    //         });
    //         console.log('Firebase initialized successfully');
    //       } else {
    //         console.log('Firebase already initialized');
    //       }
    
    //       // Log Firebase apps to verify initialization
    //       console.log('Firebase apps:', this.admin.apps);
    //     } catch (error) {
    //       console.error('Error initializing Firebase:', error.message);
    //       throw new Error('Failed to initialize Firebase');
    //     }
    //   }
    // verifyIdToken(token){
        
    // }


    // async signInWithEmailAndPassword(email:string, password:string){

    //     try{
    //         const userCred = await this.signInWithEmailAndPassword
    //     }
    // }

}

