import { Pipe, PipeTransform } from '@angular/core';
import type { Cours } from '../../donnees/cours/cours';
@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform(cours: Cours, seuil = 5): string {
    if (cours.places <= 0) return 'Complet';
    if (cours.places === 1) return 'Dernière place !';
    if (cours.places <= seuil) return `Plus que ${cours.places} places`;
    return `${cours.places} places disponibles`;
  }
}
