import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('userRole'); // Vérifie si un rôle est défini

    if (role) {
      return true; // ✅ L'utilisateur est connecté
    } else {
      this.router.navigate(['/auth']); // ❌ Redirection vers la page d'authentification
      return false;
    }
  }
}
