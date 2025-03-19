import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-gestionnaire',
  standalone: true,
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrls: ['./dashboard-gestionnaire.component.css']
})
export class DashboardGestionnaireComponent {
  constructor(private router: Router) {}

  // Redirection vers la page de création de projet
  goToCreationProjet() {
    console.log("Redirection vers la création de projet..."); // 🔍 Debug
    this.router.navigate(['/dashboard/gestionnaire/creation-projet']);
  }

  // Redirection vers la page détail du projet
  goToDetailProjet(projectName: string) {
    console.log('Redirection vers détail projet:', projectName); // ✅ Debug
    this.router.navigate(['/dashboard/gestionnaire/detail-projet'], { queryParams: { projet: projectName } });
  }

  // Déconnexion
  logout() {
    localStorage.removeItem('userRole');
    this.router.navigate(['/auth']);
  }
}
