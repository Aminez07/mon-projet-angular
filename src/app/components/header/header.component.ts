import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToNotifications() {
    this.router.navigate(['/notifications']);
  }

  goToProfile() {
    this.router.navigate(['/profil']);
  }

  logout() {
    localStorage.removeItem('userRole');
    this.router.navigate(['/auth']);
  }
}
