import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ArticleEffects } from './shared/states/article/article.effects.js';
import { articleReducer } from './shared/states/article/article.reducer.js';
import { homeReducer } from './feature/home/home.reducer.js';
import { HomeEffects } from './feature/home/home.effects.js';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideClientHydration(), 
    provideStore({
      'article': articleReducer,
      'home': homeReducer
    }), 
    provideEffects([
      ArticleEffects,
      HomeEffects
    ])
  ]
};
