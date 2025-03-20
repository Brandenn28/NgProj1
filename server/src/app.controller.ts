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

  // @Post('/auth/firebase')
  // VerifyAccessToken(token){
  //   // return console.log("this is awesone");
  //   const toke = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwODA2N2Q4M2YwY2Y5YzcxNjQyNjUwYzUyMWQ0ZWZhNWI2YTNlMDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd29ya2h1YjI0Ny00ZDhjYSIsImF1ZCI6IndvcmtodWIyNDctNGQ4Y2EiLCJhdXRoX3RpbWUiOjE3NDI0ODE5MzIsInVzZXJfaWQiOiJuR0prNW5kTnRyWW9pcFQ1R1k2dnFUbkJjUjAyIiwic3ViIjoibkdKazVuZE50cllvaXBUNUdZNnZxVG5CY1IwMiIsImlhdCI6MTc0MjQ4MTkzMiwiZXhwIjoxNzQyNDg1NTMyLCJlbWFpbCI6ImFkbWluLndvcmtodWJAd29ya2h1Yi5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW4ud29ya2h1YkB3b3JraHViLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.FMa8aYeXtqR_WlZNML2pDaJAnp9rLExaxE6bT45FWj3n9kqrdqwXeeqbLaes1eu4J6Cr4eZb-8Ukp6r1mx0BblIjAOt5717z7FtXSe1A7madwQ8z3b84U-3L63Fq6Wvz6HLIeKywfYjjBGbrXEmnieh7znIsKT_6NVwumMcOXvkkatJoGWWtsLVNaQ5IWZKwUlKA7xBLYqhuCcAPM5iy3abFGMd_DqPoThbGrdJ0v0w0vuH-GildjG_aItkKQanEuIeTWj72qj6tNgbJSSKjMkXvAfUcZTxcsqFoYHNlhovFPOqVVeWL46_pd2ULUw6VKeGavHpl7afXh7qwa8GD9w"
  //   return this.firebaseService.verifyIdToken(toke);
  // }
}
