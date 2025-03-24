import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-membre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-membre.component.html',
  styleUrls: ['./dashboard-membre.component.css']
})
export class DashboardMembreComponent implements OnInit {
  membreData: any = null;
  projets: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('membres');
    const userId = localStorage.getItem('userId');

    if (data && userId) {
      const membres = JSON.parse(data);
      this.membreData = membres.find((m: any) => m.id === userId);

      if (this.membreData && Array.isArray(this.membreData.projets)) {
        this.projets = this.membreData.projets;
      }
    }
  }

  getStatutProjetPourMembre(taches: any[]): string {
    if (!taches || taches.length === 0) return 'Aucune tâche';
    if (taches.every(t => t.statut?.toLowerCase() === 'terminé')) {
      return 'Terminé';
    } else if (taches.some(t => t.statut?.toLowerCase() === 'en cours')) {
      return 'En cours';
    } else {
      return 'Pas commencé';
    }
  }

  goToDetailProjet(projectName: string) {
    this.router.navigate(['/dashboard/membre/detail-projet'], {
      queryParams: { projet: projectName }
    });
  }

  goToProfil() {
    this.router.navigate(['/profil']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
