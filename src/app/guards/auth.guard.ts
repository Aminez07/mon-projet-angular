import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('userRole');
    console.log('AuthGuard - Rôle détecté:', role); // ✅ Debug pour voir si un rôle est détecté

    if (role) {
      return true;
    } else {
      console.warn('AuthGuard - Aucun rôle détecté, redirection vers /auth');
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
