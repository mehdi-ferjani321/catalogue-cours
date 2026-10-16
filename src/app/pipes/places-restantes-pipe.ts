import { Pipe, PipeTransform } from '@angular/core';
import { Cours } from '../models/cours';
@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform( cour: Cours, seuil :number = 5  ): string  {
    if(cour.places == 0 ) return "Complet";
    if(cour.places == 1) return 'Dernière place !';
    if(cour.places > 2) return "Plus que 3 places";
    return seuil + "places disponibles";
  }
}
