import { Injectable } from '@angular/core';
import {Utilisateur} from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    console.log("se connecter");
  }
  public estConnecte(){
    console.log("est connecté");
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public SeDeconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
    console.log("deconnectr");
  }
}
