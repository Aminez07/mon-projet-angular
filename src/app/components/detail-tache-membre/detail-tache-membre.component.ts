import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-tache-membre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detail-tache-membre.component.html',
  styleUrls: ['./detail-tache-membre.component.css']
})
export class DetailTacheMembreComponent implements OnInit {
  taskName: string = '';
  taskData: any = null;
  comments: string = '';
  file: File | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.taskName = params['task'] || '';

      const membresData = localStorage.getItem('membres');
      const userId = localStorage.getItem('userId');

      if (membresData && userId) {
        const membres = JSON.parse(membresData);
        const membre = membres.find((m: any) => m.id === userId);

        if (membre && membre.taches) {
          const tache = membre.taches.find((t: any) => t.nom === this.taskName);
          if (tache) {
            this.taskData = tache; // Pas besoin d'aller chercher dans projets ici
          }
        }
      }
    });
  }


  updateStatus(newStatus: string) {
    if (this.taskData) {
      this.taskData.statut = newStatus;
      alert(`✅ Statut mis à jour : ${newStatus}`);
    }
  }

  addComment() {
    if (this.comments.trim()) {
      alert(`💬 Commentaire ajouté : ${this.comments}`);
      this.comments = '';
    } else {
      alert('Veuillez entrer un commentaire.');
    }
  }

  handleFileInput(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  saveTask() {
    alert('💾 Tâche mise à jour localement (non sauvegardée en base).');
    this.goToDashboard();
  }

  goToDashboard() {
    this.router.navigate(['/dashboard/membre']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
