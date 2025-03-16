import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-gestionnaire',
  standalone: true,
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrl: './dashboard-gestionnaire.component.css'
})
export class DashboardGestionnaireComponent {
  constructor(private router: Router) {} // ✅ Injection du router

  goToCreationProjet() {
    this.router.navigate(['/creation-projet']); // ✅ Redirection vers la page de création de projet
  }

  logout() {
    localStorage.removeItem('userRole'); // ✅ Supprime le rôle de l'utilisateur
    this.router.navigate(['/auth']); // ✅ Redirige vers la page d'authentification
  }
}
