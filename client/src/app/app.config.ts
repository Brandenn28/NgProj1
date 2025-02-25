import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp as initializeApp_alias, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPx_wuQsxZxq3PtXW-OnAc5MUQzq26pOg",
  authDomain: "workhub247-4d8ca.firebaseapp.com",
  projectId: "workhub247-4d8ca",
  storageBucket: "workhub247-4d8ca.firebasestorage.app",
  messagingSenderId: "98203630642",
  appId: "1:98203630642:web:66fc66c87be3670e39102b",
  measurementId: "G-70WLF0R5NG"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {

  

  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), 
    providePrimeNG({
      theme:{
        preset:Aura,
      }    
    }),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({ projectId: "workhub247-4d8ca", appId: "1:98203630642:web:66fc66c87be3670e39102b", storageBucket: "workhub247-4d8ca.firebasestorage.app", apiKey: "AIzaSyBPx_wuQsxZxq3PtXW-OnAc5MUQzq26pOg", authDomain: "workhub247-4d8ca.firebaseapp.com", messagingSenderId: "98203630642", measurementId: "G-70WLF0R5NG" })), provideAuth(() => getAuth()), provideStorage(() => getStorage())
  ]
};
