import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardMembreComponent } from './components/dashboard-membre/dashboard-membre.component';
import { DashboardGestionnaireComponent } from './components/dashboard-gestionnaire/dashboard-gestionnaire.component';
import { DetailProjetMembreComponent } from './components/detail-projet-membre/detail-projet-membre.component';
import { CreationProjetComponent } from './components/creation-projet/creation-projet.component'; // ✅ Ajouté
import { AuthGuard } from './guards/auth.guard'; // ✅ Import du Guard

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard/membre', component: DashboardMembreComponent, canActivate: [AuthGuard] }, // ✅ Protection
  { path: 'dashboard/gestionnaire', component: DashboardGestionnaireComponent, canActivate: [AuthGuard] }, // ✅ Protection
  { path: 'dashboard/membre/detail-projet', component: DetailProjetMembreComponent, canActivate: [AuthGuard] }, // ✅ Protection
  { path: 'creation-projet', component: CreationProjetComponent, canActivate: [AuthGuard] }, // ✅ Protection
  { path: '**', redirectTo: 'auth' } // ✅ Ajout d'une redirection pour les routes inconnues
];
