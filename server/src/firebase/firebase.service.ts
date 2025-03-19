import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {

    constructor(){
        var admin = require("firebase-admin");

        var serviceAccount = require("../private-key/firebase/firebase-key.json");
        admin.initializeApp({
            credential:admin.credential.cert(serviceAccount)
        });
    }

    async verifyIdToken(token){
        try{
            const idToken = await admin.auth().verifyIdToken(token);
        }catch(error){
            throw new Error('Invalid Token');
        }
    }

}

