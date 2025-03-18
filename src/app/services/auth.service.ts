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
            observer.next(user);
          } else {
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
}
