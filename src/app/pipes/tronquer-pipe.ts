import { Pipe, PipeTransform } from '@angular/core';
import type { Cours } from '../../donnees/cours/cours';
@Pipe({
  name: 'tronquer',
})
export class TronquerPipe implements PipeTransform {
  transform(cours: Cours, longueurMaximale: number): string {
    if (cours.titre.length > longueurMaximale) {
      return `${cours.titre.slice(0, longueurMaximale)}...`;
    }
    return cours.titre;
  }
}
