import { Component, Input } from '@angular/core';
import type { Cours } from '../../../donnees/cours/cours';

@Component({
  imports: [],
  selector: 'app-detail-cours',
  styleUrl: './details-cours.css',
  templateUrl: './details-cours.html',
})
export class DetailCours {
  @Input() cours: Cours | null = null;
}
