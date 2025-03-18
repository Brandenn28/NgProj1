import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = getAuth(); // Get the Firebase Auth instance
  // auth.
  // Wrap Firebase's onAuthStateChanged in an observable
  return new Observable<boolean>((observer) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated, redirect to /admin/workstation
        router.navigate(['/admin/workstation']);
        observer.next(false); // Prevent access to /login
      } else {
        // User is not authenticated, allow access to /login
        observer.next(true);
      }
      observer.complete();
    });
    return unsubscribe;
  });
};