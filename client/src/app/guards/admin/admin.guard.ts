import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  // Check if user is logged in, then check if user is an admin
  return true;
};
