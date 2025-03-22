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
      // Essayer d'abord localStorage
      let users = JSON.parse(localStorage.getItem('users') || 'null');

      if (users && Array.isArray(users)) {
        this.checkCredentials(users, email, password, observer);
      } else {
        // Sinon, fallback vers le fichier JSON
        this.http.get<any[]>('assets/users.json').subscribe(
          fichierUsers => {
            console.log('📁 Données chargées depuis users.json :', fichierUsers);
            this.checkCredentials(fichierUsers, email, password, observer);
          },
          error => {
            console.error('Erreur de chargement de users.json', error);
            observer.error(error);
          }
        );
      }
    });
  }

  private checkCredentials(users: any[], email: string, password: string, observer: any) {
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      console.log('✅ Utilisateur trouvé :', user);
      localStorage.setItem('userRole', user.role); // Nécessaire pour AuthGuard
      observer.next(user);
    } else {
      console.warn('❌ Aucune correspondance email/mot de passe');
      observer.next(null);
    }

    observer.complete();
  }

  logout() {
    localStorage.removeItem('userRole');
  }
}
