import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

/**
 * Cette classe est utilisée pour protéger le composant admin de l'accès des utilisateurs non authotentifiéss
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // Injection du service d'authentification
  constructor(private authService: AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.estConnecte();
  }
  
}
