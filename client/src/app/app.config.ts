import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPx_wuQsxZxq3PtXW-OnAc5MUQzq26pOg",
  authDomain: "workhub247-4d8ca.firebaseapp.com",
  projectId: "workhub247-4d8ca",
  storageBucket: "workhub247-4d8ca.firebasestorage.app",
  messagingSenderId: "98203630642",
  appId: "1:98203630642:web:66fc66c87be3670e39102b",
  measurementId: "G-70WLF0R5NG"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      }
    }),
    provideHttpClient(),
    // Firebase providers
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()), // Add this if you're using Firebase Authentication
  ]
};