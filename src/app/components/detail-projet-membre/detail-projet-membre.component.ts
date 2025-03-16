import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router pour la navigation

@Component({
  selector: 'app-detail-projet-membre',
  standalone: true,
  templateUrl: './detail-projet-membre.component.html',
  styleUrl: './detail-projet-membre.component.css'
})
export class DetailProjetMembreComponent {

  constructor(private router: Router) {} // Injection du service Router

  // Méthode pour retourner au tableau de bord
  goToDashboard() {
    this.router.navigate(['/dashboard-membre']); // Redirige vers la page du tableau de bord membre
  }
}
