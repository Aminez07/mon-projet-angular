import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Pour *ngIf, *ngFor

@Component({
  selector: 'app-dashboard-gestionnaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrls: ['./dashboard-gestionnaire.component.css']
})
export class DashboardGestionnaireComponent implements OnInit {
  gestionnaireData: any = null;
  projets: any[] = []; // ✅ Toujours initialiser comme tableau vide

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('gestionnaires');
    const userId = localStorage.getItem('userId');

    if (data && userId) {
      try {
        const gestionnaires = JSON.parse(data);
        this.gestionnaireData = gestionnaires.find((g: any) => g.id === userId);

        if (this.gestionnaireData && Array.isArray(this.gestionnaireData.projets)) {
          // ✅ Génère le statut dynamiquement pour chaque projet
          this.projets = this.gestionnaireData.projets.map((projet: any) => ({
            ...projet,
            statut: this.calculerStatutProjet(projet)
          }));
        } else {
          this.projets = [];
          console.warn('⚠️ Aucun projet trouvé ou gestionnaire vide.');
        }
      } catch (e) {
        console.error('❌ Erreur lors du parsing de gestionnaires.json :', e);
      }
    } else {
      console.warn('❌ Données de session manquantes pour le gestionnaire.');
    }
  }

  // ✅ Statut intelligent basé sur les tâches
  calculerStatutProjet(projet: any): string {
    if (!projet.taches || projet.taches.length === 0) {
      return 'Aucune tâche';
    }

    const total = projet.taches.length;
    const terminees = projet.taches.filter((t: any) => t.statut === 'terminé').length;
    const pourcentage = Math.round((terminees / total) * 100);

    if (pourcentage === 100) return '✅ Terminé à 100%';
    if (pourcentage === 0) return '⏳ Pas commencé';
    return `🛠 En cours (${pourcentage}%)`;
  }

  goToCreationProjet(): void {
    this.router.navigate(['/dashboard/gestionnaire/creation-projet']);
  }

  goToDetailProjet(projectName: string): void {
    this.router.navigate(['/dashboard/gestionnaire/detail-projet'], {
      queryParams: { projet: projectName }
    });
  }

  goToProfil(): void {
    this.router.navigate(['/profil']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
