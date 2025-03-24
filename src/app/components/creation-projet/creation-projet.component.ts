import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-projet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './creation-projet.component.html',
  styleUrls: ['./creation-projet.component.css']
})
export class CreationProjetComponent {
  projectName: string = '';
  projectDescription: string = '';
  startDate: string = '';
  endDate: string = '';
  members: string = '';

  constructor(private router: Router) {}

  saveProject() {
    const project = {
      projectName: this.projectName,
      projectDescription: this.projectDescription,
      startDate: this.startDate,
      endDate: this.endDate,
      members: this.members
    };

    console.log('Projet enregistré :', project);

    // 🗂️ Stocker dans localStorage
    const existingProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    existingProjects.push(project);
    localStorage.setItem('projects', JSON.stringify(existingProjects));

    alert('✅ Projet enregistré avec succès !');
    this.router.navigate(['/dashboard/gestionnaire']);
  }

  cancel() {
    this.router.navigate(['/dashboard/gestionnaire']);
  }
}
