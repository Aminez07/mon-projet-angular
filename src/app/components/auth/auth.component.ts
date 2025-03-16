import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { Router } from '@angular/router'; // Ajout du router pour la navigation
@Component({
  selector: 'app-auth',
  standalone: true, // ✅ Standalone Component
  imports: [FormsModule], // ✅ Ajout du FormsModule ici
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {} // Injection du service Router

  onSubmit() {
    console.log('Connexion en cours...', this.email, this.password);

    // Simuler une authentification
    if (this.email === 'test@example.com' && this.password === 'password') {
      alert('Connexion réussie ! Redirection en cours...');
      this.router.navigate(['/dashboard']); // Redirection vers le tableau de bord
    } else {
      alert('Email ou mot de passe incorrect.');
    }
  }

  onRegister() {
    this.router.navigate(['/register']); // Redirige vers la page d'inscription
  }
}
