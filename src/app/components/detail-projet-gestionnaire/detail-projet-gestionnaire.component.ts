import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Ajout de CommonModule

@Component({
  selector: 'app-detail-projet-gestionnaire',
  standalone: true,
  imports: [CommonModule], // ✅ Ajout de CommonModule ici pour *ngFor
  templateUrl: './detail-projet-gestionnaire.component.html',
  styleUrls: ['./detail-projet-gestionnaire.component.css']
})
export class DetailProjetGestionnaireComponent {
  projectName: string = '';
  tasks: any[] = [
    { name: 'Créer la page d’accueil', dueDate: '2025-01-10', completed: false },
    { name: 'Développer les APIs Backend', dueDate: '2025-01-15', completed: false }
  ];
  members = ['Utilisateur 1', 'Utilisateur 2'];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.projectName = params['projet'] || 'Projet Alpha';
    });
  }

  deleteProject() {
    alert('Projet supprimé avec succès.');
    this.router.navigate(['/dashboard/gestionnaire']);
  }

  addTask() {
    const newTask = prompt('Nouvelle tâche :');
    if (newTask) {
      this.tasks.push({ name: newTask, dueDate: '2025-01-20', completed: false });
    }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard/gestionnaire']);
  }

  logout() {
    localStorage.removeItem('userRole');
    this.router.navigate(['/auth']);
  }

  modifyTask(task: any) {
    const updatedTaskName = prompt('Modifier la tâche :', task.name);
    if (updatedTaskName !== null && updatedTaskName.trim() !== '') {
      task.name = updatedTaskName;
    }
  }
}
