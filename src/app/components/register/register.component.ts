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

    // 🔍 Récupérer les utilisateurs existants
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // ❗ Vérifier si l'email est déjà utilisé
    const emailExists = users.some((u: any) => u.email === newUser.email);

    if (emailExists) {
      alert("❌ Cet email est déjà utilisé.");
      return;
    }

    // ✅ Ajouter le nouvel utilisateur
    users.push(newUser);

    // 💾 Enregistrer dans le localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert("✅ Inscription réussie !");
    this.router.navigate(['/auth']);
  }

  goToLogin() {
    this.router.navigate(['/auth']);
  }
}
