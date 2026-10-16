import { Pipe, PipeTransform } from '@angular/core';
import { Cours } from '../models/cours';
@Pipe({
  name: 'filterCours',
})
export class FilterCoursPipe implements PipeTransform {
  transform(cours: Cours[], recherche: string): Cours[] {
    if (!recherche) return cours;
    const q = recherche.toLowerCase();
    return cours.filter(c => c.titre.toLowerCase().includes(q));
  }
}
