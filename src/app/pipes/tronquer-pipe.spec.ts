import { TronquerPipe } from './tronquer-pipe';
import type { Cours } from '../../donnees/cours';

describe('TronquerPipe', () => {
  const pipe = new TronquerPipe();
  const coursAvecTitre = (titre: string): Cours => ({
    id: 1,
    titre,
    categorie: 'Test',
    duree: '1h',
    places: 1,
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('truncates the course title to the requested length', () => {
    expect(pipe.transform(coursAvecTitre('Angular avancé'), 7)).toBe('Angular...');
  });

  it('leaves short course titles unchanged', () => {
    expect(pipe.transform(coursAvecTitre('Angular'), 7)).toBe('Angular');
  });
});
