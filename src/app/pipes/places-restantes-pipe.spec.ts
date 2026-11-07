import { PlacesRestantesPipe } from './places-restantes-pipe';
import type { Cours } from '../../donnees/cours';

describe('PlacesRestantesPipe', () => {
  const pipe = new PlacesRestantesPipe();
  const coursAvecPlaces = (places: number): Cours => ({
    id: 1,
    titre: 'Cours test',
    categorie: 'Test',
    duree: '1h',
    places,
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('reports when a course is full', () => {
    expect(pipe.transform(coursAvecPlaces(0))).toBe('Complet');
  });

  it('reports the remaining places accurately', () => {
    expect(pipe.transform(coursAvecPlaces(1))).toBe('Dernière place !');
    expect(pipe.transform(coursAvecPlaces(3))).toBe('Plus que 3 places');
    expect(pipe.transform(coursAvecPlaces(8))).toBe('8 places disponibles');
  });
});
