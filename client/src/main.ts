import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const firebaseConfig = {
  apiKey: "AIzaSyBPx_wuQsxZxq3PtXW-OnAc5MUQzq26pOg",
  authDomain: "workhub247-4d8ca.firebaseapp.com",
  projectId: "workhub247-4d8ca",
  storageBucket: "workhub247-4d8ca.firebasestorage.app",
  messagingSenderId: "98203630642",
  appId: "1:98203630642:web:66fc66c87be3670e39102b",
  measurementId: "G-70WLF0R5NG"
};

bootstrapApplication(AppComponent, appConfig, )
  .catch((err) => console.error(err));

