import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-projet-membre',
  standalone: true,
  templateUrl: './detail-projet-membre.component.html',
  styleUrls: ['./detail-projet-membre.component.css'],
  imports: [CommonModule, TitleCasePipe, FormsModule]
})
export class DetailProjetMembreComponent implements OnInit {
  membreId: string = '';
  membreData: any = null;
  projets: string[] = []; // ✅ Tableau des noms de projets
  projetSelectionne: string = '';
  filtreActif: string = '';
  tachesFiltreesParProjet: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const data = localStorage.getItem('membres');
    const userId = localStorage.getItem('userId');

    if (data && userId) {
      const membres = JSON.parse(data);
      this.membreData = membres.find((m: any) => m.id === userId);

      if (this.membreData && this.membreData.taches) {
        // Extraire les projets uniques à partir des tâches
        const projetsSet = new Set<string>();
        this.membreData.taches.forEach((t: any) => {
          if (t.projet) projetsSet.add(t.projet);
        });

        this.projets = Array.from(projetsSet);

        // Sélectionner automatiquement le premier projet
        if (this.projets.length > 0) {
          this.projetSelectionne = this.projets[0];
          this.filtrerTachesParProjet();
        }
      }
    }
  }

  filtrerTachesParProjet() {
    this.tachesFiltreesParProjet = this.membreData?.taches?.filter(
      (t: any) => t.projet === this.projetSelectionne
    ) || [];
  }

  getTachesFiltrees() {
    let taches = this.tachesFiltreesParProjet;

    if (!this.filtreActif) return taches;

    return taches.filter((t: any) => {
      switch (this.filtreActif) {
        case 'prioritaire':
          return t.priorite?.toLowerCase() === 'haute';
        case 'semaine':
          const now = new Date();
          const dateEcheance = new Date(t.dateEcheance);
          const diff = (dateEcheance.getTime() - now.getTime()) / (1000 * 3600 * 24);
          return diff >= 0 && diff <= 7;
        case 'termine':
          return t.statut?.toLowerCase() === 'terminé' || t.statut?.toLowerCase() === 'termine';
        default:
          return true;
      }
    });
  }

  setFiltre(val: string) {
    this.filtreActif = val;
  }

  trackByNom(index: number, tache: any) {
    return tache.nom;
  }

  goToDetailTache(titre: string) {
    this.router.navigate(['/dashboard/membre/detail-tache'], {
      queryParams: { task: titre }
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard/membre']);
  }
}
