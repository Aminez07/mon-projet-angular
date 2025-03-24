import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    if (!this.email || !this.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        if (user) {
          alert('Connexion réussie !');

          if (user.role === 'gestionnaire') {
            this.router.navigate(['/dashboard/gestionnaire']);
          } else if (user.role === 'membre') {
            this.router.navigate(['/dashboard/membre']);
          }
        } else {
          alert('Email ou mot de passe incorrect.');
        }
      },
      error: (err) => {
        console.error('Erreur lors de la connexion :', err);
        alert('Erreur technique. Vérifie le fichier JSON ou contacte le support.');
      }
    });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
