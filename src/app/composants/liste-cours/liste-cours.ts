import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cours } from '../../models/cours.ts';
import { FilterCoursPipe } from '../../pipes/filter-cours-pipe.ts';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe.ts';
import { UpperCasePipe } from '@angular/common';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { TronquerPipe } from '../../pipes/tronquer-pipe.ts';
@Component({
  imports: [FormsModule, FilterCoursPipe, TriCoursPipe, UpperCasePipe, PlacesRestantesPipe , TronquerPipe],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCours {
  recherche ='';
  tri : 'asc' | 'desc' = 'asc'; 
  // ... coursActif, coursSelectionne, cours, selectionner() inchangés
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null = null;

  cours : Cours[] = [
    { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8 },
    { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 15 },
    { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6 },
    { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 }
  ];

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }


}
