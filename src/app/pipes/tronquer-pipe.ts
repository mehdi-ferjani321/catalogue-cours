import { Pipe, PipeTransform } from '@angular/core';
import { Cours } from '../models/cours';
@Pipe({
  name: 'tronquer',
})
export class TronquerPipe implements PipeTransform {
  transform(cour : Cours, nbr : number ): string {
    if(cour.titre.length > nbr ) return cour.titre.substring(0,20)+'...'; 
    return cour.titre 
  }
}
