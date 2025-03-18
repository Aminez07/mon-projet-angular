import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // ✅ Import du service
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule], // ✅ FormsModule doit être ajouté ici !
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe((user) => {
      if (user) {
        localStorage.setItem('userRole', user.role); // 🔹 Stocke le rôle pour la redirection
        alert('Connexion réussie !');

        if (user.role === 'gestionnaire') {
          this.router.navigate(['/dashboard/gestionnaire']);
        } else if (user.role === 'membre') {
          this.router.navigate(['/dashboard/membre']);
        }
      } else {
        alert('Email ou mot de passe incorrect.');
      }
    });
  }

  onRegister() {
    this.router.navigate(['/register']); // Redirige vers la page d'inscription
  }
}
