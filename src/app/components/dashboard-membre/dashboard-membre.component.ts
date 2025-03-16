import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-membre',
  standalone: true,
  templateUrl: './dashboard-membre.component.html',
  styleUrl: './dashboard-membre.component.css'
})
export class DashboardMembreComponent {
  constructor(private router: Router) {}

  // Redirection vers la page détail du projet avec un paramètre
  goToDetailProjet(projectName: string) {
    this.router.navigate(['/detail-projet-membre'], { queryParams: { projet: projectName } });
  }
  // deconexion
  logout() {
    localStorage.removeItem('userRole'); // Supprime le rôle de l'utilisateur
    this.router.navigate(['/auth']); // Redirige vers la page d'authentification
  }
}
