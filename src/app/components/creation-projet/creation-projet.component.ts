import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Ajout du FormsModule pour [(ngModel)]
import { Router } from '@angular/router'; // ✅ Ajout du Router pour la navigation

@Component({
  selector: 'app-creation-projet',
  standalone: true, // ✅ Composant standalone
  imports: [FormsModule], // ✅ Ajout de FormsModule ici
  templateUrl: './creation-projet.component.html',
  styleUrls: ['./creation-projet.component.css']
})
export class CreationProjetComponent {
  projectName: string = '';
  projectDescription: string = '';
  startDate: string = '';
  endDate: string = '';
  members: string = '';

  constructor(private router: Router) {} // ✅ Injection du Router

  // ✅ Méthode pour enregistrer le projet
  saveProject() {
    console.log('Projet enregistré :', {
      projectName: this.projectName,
      projectDescription: this.projectDescription,
      startDate: this.startDate,
      endDate: this.endDate,
      members: this.members
    });

    alert('Projet enregistré avec succès !');
    this.router.navigate(['/dashboard/gestionnaire']); // ✅ Redirection vers le tableau de bord
  }

  // ✅ Méthode pour annuler la création du projet
  cancel() {
    this.router.navigate(['/dashboard/gestionnaire']); // ✅ Redirection sans sauvegarde
  }
}
