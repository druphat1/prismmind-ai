import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'PrismMind AI — One Question. Infinite Perspectives.'
  },
  {
    path: 'explore-minds',
    loadComponent: () => import('./pages/explore-minds/explore-minds.component').then(m => m.ExploreMindsComponent),
    title: 'Explore Minds — PrismMind AI'
  },
  {
    path: 'mind-clash',
    loadComponent: () => import('./pages/mind-clash/mind-clash.component').then(m => m.MindClashComponent),
    title: 'Mind Clash — PrismMind AI'
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.component').then(m => m.HistoryComponent),
    title: 'History — PrismMind AI'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
