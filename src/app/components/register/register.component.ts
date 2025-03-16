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
    // 🚀 Simulation de l'inscription (en attendant Spring Boot)
    console.log('Utilisateur inscrit:', {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      role: this.role
    });

    // ⚠️ Ici, il faudra appeler l'API Spring Boot plus tard

    // Redirection vers la connexion après inscription
    this.router.navigate(['/auth']);
  }

  goToLogin() {
    this.router.navigate(['/auth']);
  }
}
