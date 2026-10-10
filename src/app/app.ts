import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { Cours } from './models/cours';
import { DetailCours } from './composants/details-cours/details-cours';

@Component({
  imports: [EnTete, ListeCours, PiedPage, DetailCours],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  coursSelectionne: Cours | null = null;
 
  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }

}
