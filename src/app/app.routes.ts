import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardMembreComponent } from './components/dashboard-membre/dashboard-membre.component';
import { DashboardGestionnaireComponent } from './components/dashboard-gestionnaire/dashboard-gestionnaire.component';
import { DetailProjetMembreComponent } from './components/detail-projet-membre/detail-projet-membre.component';
import { DetailProjetGestionnaireComponent } from './components/detail-projet-gestionnaire/detail-projet-gestionnaire.component';
import { CreationProjetComponent } from './components/creation-projet/creation-projet.component';
import { DetailTacheMembreComponent } from './components/detail-tache-membre/detail-tache-membre.component'; // ✅ Ajout de l'import
import { CreationTacheComponent } from './components/creation-tache/creation-tache.component'; // ✅ Ajouté ici
import { AuthGuard } from './guards/auth.guard'; // ✅ Import du Guard

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },

  // ✅ Routes protégées par AuthGuard pour les membres
  { path: 'dashboard/membre', component: DashboardMembreComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/membre/detail-projet', component: DetailProjetMembreComponent, canActivate: [AuthGuard] }, // ✅ Correction avec paramètre ID

  // ✅ Routes protégées par AuthGuard pour les gestionnaires
  { path: 'dashboard/gestionnaire', component: DashboardGestionnaireComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/gestionnaire/detail-projet', component: DetailProjetGestionnaireComponent, canActivate: [AuthGuard] }, // ✅ Correction avec paramètre ID
  { path: 'dashboard/gestionnaire/creation-projet', component: CreationProjetComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/membre/detail-tache', component: DetailTacheMembreComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/gestionnaire/detail-projet/creation-tache', component: CreationTacheComponent, canActivate: [AuthGuard] },

  // ✅ Redirection pour toute route inconnue
  { path: '**', redirectTo: 'auth' }
];
