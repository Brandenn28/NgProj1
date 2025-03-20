import { Controller, Post } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {


  constructor(private readonly firebaseService: FirebaseService) {}



  Post
  @Post('/auth')
  VerifyAccessTokeen(){
      const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwODA2N2Q4M2YwY2Y5YzcxNjQyNjUwYzUyMWQ0ZWZhNWI2YTNlMDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd29ya2h1YjI0Ny00ZDhjYSIsImF1ZCI6IndvcmtodWIyNDctNGQ4Y2EiLCJhdXRoX3RpbWUiOjE3NDI0ODMxOTYsInVzZXJfaWQiOiJuR0prNW5kTnRyWW9pcFQ1R1k2dnFUbkJjUjAyIiwic3ViIjoibkdKazVuZE50cllvaXBUNUdZNnZxVG5CY1IwMiIsImlhdCI6MTc0MjQ4MzE5NiwiZXhwIjoxNzQyNDg2Nzk2LCJlbWFpbCI6ImFkbWluLndvcmtodWJAd29ya2h1Yi5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW4ud29ya2h1YkB3b3JraHViLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RvSn8q5qI6ghMZwGilutLy_Hjrr6k5yTdUlRQmtqkrJIM3u8AdBneiRDv_Dj2-yDpXWmdcrVgj9TUqZwtgVQxauGmtDUV25wTjhzmJiYeOpEf1yvpWeg7M34e68CFttt6uHHOQkVVtqf6uZWWDv-A2mWZoXfNkeKazFuiRnWrP5nVnxqz3z9oX2LqnzqqJUIgqKckKbd_r9Zl9f239-U9y0noUyWOT1DJsKbcyY_KDx4z1OWHiqVoxGkmfISU-bJDjEbBWL-tEvcnQl4sKyU0Zxyv6Mhe_gdiGaOnsXDu1K3vfWdxa86NHPffpP9FBf_Sl8gRjEmJw2VGqeDCxrn4w";
    return this.firebaseService.verifyIdToken(token);
  }
}
