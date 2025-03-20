import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-projet-membre',
  standalone: true,
  templateUrl: './detail-projet-membre.component.html',
  styleUrls: ['./detail-projet-membre.component.css']
})
export class DetailProjetMembreComponent {
  constructor(private router: Router) {}

  // ✅ Redirection vers le détail de la tâche avec paramètre
  goToDetailTache(taskName: string) {
    console.log('Redirection vers la tâche :', taskName); // Debug
    this.router.navigate(['/dashboard/membre/detail-tache'], { queryParams: { task: taskName } });
  }

  // ✅ Retour au tableau de bord
  goToDashboard() {
    this.router.navigate(['/dashboard/membre']);
  }
}
