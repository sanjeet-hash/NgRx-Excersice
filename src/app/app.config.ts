import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appState } from './shared/store/globle/App.status';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { blogEffect } from './shared/store/blog/blog.effect';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    importProvidersFrom(StoreModule.forRoot(appState),EffectsModule.forRoot([blogEffect]),HttpClientModule), //here appstate is the  parameter which is initialize globle folder
    provideAnimations(),
    provideStoreDevtools({ maxAge: false, logOnly: !isDevMode() }),
    provideEffects(),
   
    
],
};
