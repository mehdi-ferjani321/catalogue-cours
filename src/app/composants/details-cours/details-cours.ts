import { Component, Input } from '@angular/core';

export interface Cours {
  titre: string;
  categorie: string;
  duree: string;
  places: number;
}

@Component({
  standalone: true,
  selector: 'app-details-cours',
  templateUrl: './details-cours.html',
  styleUrl: './details-cours.css',
})
export class DetailsCours {
  @Input() cours: Cours | null = null;
}