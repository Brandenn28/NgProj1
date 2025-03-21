import { Body, Controller, Post } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {

  constructor(private readonly firebaseService: FirebaseService) {}

  // Post
  @Post('/verifyIdToken')
  async verifyIdToken(@Body('idToken') idtoken:any){
    console.log();
    return this.firebaseService.verifyIdToken(idtoken);
  }

}