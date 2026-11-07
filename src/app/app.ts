import { Component, inject } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import type { Cours } from '../donnees/cours/cours';
import {Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Session } from './services/session';


@Component({
  imports: [EnTete, PiedPage ,RouterOutlet,RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  coursSelectionne: Cours | null = null;
 
  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }

  session = inject(Session);
  private router = inject(Router);
  deconnecter() {
  this.session.deconnecter();
  this.router.navigateByUrl('/');
  }


}
