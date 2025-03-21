import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Utilisateur',
    email: 'utilisateur@example.com',
    phone: '+1 234 567 890'
  };

  saveProfile() {
    alert('Profil mis à jour avec succès !');
  }
}
