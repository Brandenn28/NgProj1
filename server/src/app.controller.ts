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
  //   const toke = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwODA2N2Q4M2YwY2Y5YzcxNjQyNjUwYzUyMWQ0ZWZhNWI2YTNlMDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd29ya2h1YjI0Ny00ZDhjYSIsImF1ZCI6IndvcmtodWIyNDctNGQ4Y2EiLCJhdXRoX3RpbWUiOjE3NDI0ODM5NzQsInVzZXJfaWQiOiJuR0prNW5kTnRyWW9pcFQ1R1k2dnFUbkJjUjAyIiwic3ViIjoibkdKazVuZE50cllvaXBUNUdZNnZxVG5CY1IwMiIsImlhdCI6MTc0MjQ4Mzk3NCwiZXhwIjoxNzQyNDg3NTc0LCJlbWFpbCI6ImFkbWluLndvcmtodWJAd29ya2h1Yi5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW4ud29ya2h1YkB3b3JraHViLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.etc_oGkib3ebTIH1eCZ49Utf7iewTR_okruQgH95mL0xk11oX9T80yCZ1ZcUs5WvwH2UgTGY7QF5AqWftGHmnwdq4FQDFAvZvXiRU7vELVARftERr265hl79-5QQm9LdsQllvZgm0VLhiqv7qpNpfV0NqZa6or6yQsI8-y-R7aaSL21WiaaXMWv7Et2MXQy64h0ftjNOpau8O2sMNiBulkax_oUFMqAk0VntRPhaHCU4tteW9W48j8GJXE4aW6mPBVA4wooyr4A8gPnS2-pmsG-oCBo6CubMbjH5jRQFIgld60ffB7xq9Zx_94Wf5Qp_RHP-2S01Vp4TYmZL5_TzZQ"
  //   return this.firebaseService.verifyIdToken(toke);
  // }
}
