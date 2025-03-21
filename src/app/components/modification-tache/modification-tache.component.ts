import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Pour ngModel

@Component({
  selector: 'app-modification-tache',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Modules nécessaires
  templateUrl: './modification-tache.component.html',
  styleUrls: ['./modification-tache.component.css']
})
export class ModificationTacheComponent {
  taskTitle: string = '';
  taskDescription: string = '';
  taskStatus: string = 'En attente';
  members: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.loadTaskData();
  }

  /**
   * Charger les détails de la tâche à modifier
   */
  loadTaskData() {
    this.route.queryParams.subscribe(params => {
      this.taskTitle = params['title'] || 'Titre de la tâche';
      this.taskDescription = params['description'] || 'Description de la tâche';
      this.taskStatus = params['status'] || 'En attente';

      // Charger les membres associés au projet
      const savedMembers = localStorage.getItem('projectMembers');
      this.members = savedMembers ? JSON.parse(savedMembers) : ['Membre 1', 'Membre 2'];
    });
  }

  /**
   * Enregistrer les modifications de la tâche
   */
  saveTask() {
    alert('✅ Modifications enregistrées avec succès !');
    this.router.navigate(['/dashboard/gestionnaire/detail-projet']);
  }

  /**
   * Annuler la modification
   */
  cancel() {
    this.router.navigate(['/dashboard/gestionnaire/detail-projet']);
  }
}
