import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('currentUser');
    if (data) {
      this.user = JSON.parse(data);
    } else {
      alert("Aucun utilisateur connecté.");
      this.router.navigate(['/auth']);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
