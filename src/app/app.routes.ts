import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { PageDetail } from './pages/page-detail/page-detail';
import { Connexion } from './pages/connexion/connexion';
import { Introuvable } from './pages/introuvable/introuvable';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { MesInscriptions } from './pages/mes-inscriptions/mes-inscriptions';

export const routes: Routes = [
{ path: '', component: Accueil, title: 'Accueil' },
{ path: 'cours', component: ListeCours, title: 'Catalogue' },
{ path: 'cours/:id', component: PageDetail, title: 'Détail du cours' },
{ path: 'connexion', component: Connexion, title: 'Connexion' },
{ path: 'mes-inscription',  component: MesInscriptions, title: 'Mes inscriptions' },
{ path: '**', component: Introuvable, title: 'Page introuvable' },
];