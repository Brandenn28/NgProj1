import { Injectable } from '@nestjs/common';
import { error } from 'console';
import * as admin from 'firebase-admin';
import { Auth } from 'firebase-admin/lib/auth/auth';
import * as path from 'path';
import { zip } from 'rxjs';
// import { resolve } from 'path';
// import { Injectable } from '@nestjs/common';
interface VerifyTokenResponse {
    success: boolean;
    user?: {
      uid: string;
      email: string;
      name?: string;
    };
    error?: string;
  }
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


    async verifyIdToken(token): Promise<{success: boolean; user?: any; error?: string}> {
        try {
            console.log("Verify token", token);
            const decodedToken = await this.admin.auth().verifyIdToken(token);
            
            return {
                success:true,
                user:{
                    uid:decodedToken.uid,
                    email: decodedToken.email,
                    name:decodedToken.name || 'Unknown'
                },
            };
        //   console.log('Decoded Token:', decodedToken);
        //   return true;
        } catch (error) {
            console.log("error");

            return{
                success:false,
                error:error.message || 'Invalid Token'
            };
      }
    }

}

