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
    console.log('Redirection vers détail projet:', projectName); // ✅ Debug pour voir si le clic fonctionne
    this.router.navigate(['/dashboard/membre/detail-projet'], { queryParams: { projet: projectName } });
  }

  // deconexion
  logout() {
    localStorage.removeItem('userRole'); // Supprime le rôle de l'utilisateur
    this.router.navigate(['/auth']); // Redirige vers la page d'authentification
  }
}
