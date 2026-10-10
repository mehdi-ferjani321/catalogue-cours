import { Component, Input } from '@angular/core';
import { Cours } from '../../models/cours.ts';

@Component({
  imports: [],
  selector: 'app-detail-cours',
  styleUrl: './details-cours.css',
  templateUrl: './details-cours.html',
})
export class DetailCours {
  @Input() cours: Cours | null = null;
}
export type { Cours };

