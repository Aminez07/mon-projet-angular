import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fullname: string = '';
  email: string = '';
  password: string = '';
  role: string = 'membre';

  constructor(private router: Router) {}


  onSubmit() {
    const newUser = {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      role: this.role
    };

    // Récupérer les utilisateurs existants depuis localStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Vérifie si l’email existe déjà
    const emailExists = users.some((u: any) => u.email === newUser.email);

    if (emailExists) {
      alert("❌ Cet email est déjà utilisé.");
      return;
    }

    // Ajouter et sauvegarder
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("✅ Inscription réussie !");
    this.router.navigate(['/auth']);
  }


  goToLogin() {
    this.router.navigate(['/auth']);
  }
}
