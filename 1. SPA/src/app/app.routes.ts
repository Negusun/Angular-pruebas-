import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'error' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
