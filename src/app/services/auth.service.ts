import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.http.get<any[]>('assets/users.json').subscribe(
        users => {
          console.log('Données reçues de users.json :', users); // ✅ Debug
          const user = users.find(u => u.email === email && u.password === password);

          if (user) {
            console.log('Utilisateur trouvé:', user); // ✅ Vérifie si l'utilisateur est trouvé
            localStorage.setItem('userRole', user.role); // ✅ Stocke le rôle pour AuthGuard
            observer.next(user);
          } else {
            console.warn('Aucun utilisateur trouvé avec cet email/mot de passe');
            observer.next(null);
          }
          observer.complete();
        },
        error => {
          console.error('Erreur de chargement de users.json', error);
          observer.error(error);
        }
      );
    });
  }

  logout() {
    localStorage.removeItem('userRole');
  }
}
