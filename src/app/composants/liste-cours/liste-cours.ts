import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Cours } from '../../../donnees/cours/cours';
import { FilterCoursPipe } from '../../pipes/filter-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { UpperCasePipe } from '@angular/common';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { TronquerPipe } from '../../pipes/tronquer-pipe';
import { RouterLink } from '@angular/router';
@Component({
  imports: [FormsModule, FilterCoursPipe, TriCoursPipe, UpperCasePipe, PlacesRestantesPipe , TronquerPipe ,RouterLink ],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCours {
  recherche ='';
  tri : 'asc' | 'desc' = 'asc'; 
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null = null;

  cours : Cours[] = [
    { id: 1, titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8 },
    { id: 2, titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 15 },
    { id: 3, titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6 },
    { id: 4, titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 }
  ];

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}
