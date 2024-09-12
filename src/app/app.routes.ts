import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component.js';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'article/:id',
    loadComponent: () => import('./feature/article/article.component').then((c) => c.ArticleComponent)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
