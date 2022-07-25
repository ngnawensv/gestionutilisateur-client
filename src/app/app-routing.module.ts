import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},  // pathMatch pour rediriger le chemin vide vers le chemin de connexion
  { path: 'connexion', component: ConnexionComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
