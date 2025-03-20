import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FirebaseService } from './firebase/firebase.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private firebaseService:FirebaseService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/UiD')
  getMyId(): string{
    return this.appService.getHello();
  }

  @Post('/auth/firebase')
  VerifyAccessToken(token){
    // return console.log("this is awesone");
    return this.firebaseService.verifyIdToken(token);
  }
}
