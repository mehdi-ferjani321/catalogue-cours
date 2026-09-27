import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { ListeCours } from './composants/liste-cours/liste-cours';

@Component({
  imports: [EnTete, PiedPage , ListeCours],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-standalone');
}
