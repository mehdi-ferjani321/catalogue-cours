import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetailCours } from '../../composants/details-cours/details-cours';
import { Input } from '@angular/core';
import { Cours } from '../../../donnees/cours/cours';
@Component({
  imports: [DetailCours, RouterLink],
  selector: 'app-page-detail',
  styleUrl: './page-detail.css',
  templateUrl: './page-detail.html',
})
export class PageDetail {
@Input() id: string = '';

get cours(): Cours | undefined {
  return Cours.find(c => c.id === Number(this.id));
}

}
