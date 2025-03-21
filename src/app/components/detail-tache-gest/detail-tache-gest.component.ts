import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Pour ngModel

@Component({
  selector: 'app-detail-tache-gest',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detail-tache-gest.component.html',
  styleUrls: ['./detail-tache-gest.component.css']
})
export class DetailTacheGestComponent {
  taskName: string = 'Titre de la Tâche';
  dueDate: string = '15 octobre 2024';
  assignedTo: string = 'Membre 1';
  description: string = 'Description de la tâche...';
  status: string = 'Pas commencé';
  comments: string = '';
  file: File | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.taskName = params['task'] || 'Titre de la Tâche';
    });
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
    alert(`Statut mis à jour : ${newStatus}`);
  }

  addComment() {
    if (this.comments.trim() !== '') {
      alert(`Commentaire ajouté : ${this.comments}`);
    } else {
      alert('Veuillez entrer un commentaire.');
    }
  }

  handleFileInput(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      alert(`Fichier ajouté : ${this.file?.name}`);
    } else {
      alert('Aucun fichier sélectionné.');
    }
  }

  async saveTask() {
    alert('Tâche mise à jour avec succès.');
    await this.router.navigate(['/dashboard/gestionnaire']);
  }

  async goToDashboard() {
    await this.router.navigate(['/dashboard/gestionnaire']);
  }

  async logout() {
    localStorage.removeItem('userRole');
    await this.router.navigate(['/auth']);
  }
}
