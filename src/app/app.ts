import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { Cours, DetailsCours } from './composants/details-cours/details-cours';

@Component({
  standalone: true,
  imports: [EnTete, PiedPage, ListeCours, DetailsCours],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-standalone');
  coursActif: Cours | null = null;

  coursSelectionne(cours: Cours): void {
    this.coursActif = cours;
  }
}
