import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {AdvertsComponent} from './modules/adverts/pages/adverts/adverts.component';
import {AdvertComponent} from './modules/adverts/pages/advert/advert.component';
import {AddAdvertComponent} from './modules/adverts/components/add-advert/add-advert.component';
import {RegisterComponent} from './modules/Auth/register/register.component';
import {LoginComponent} from './modules/Auth/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'adverts'},
  { path: 'adverts', component: AdvertsComponent},
  { path: 'advert', component: AdvertComponent},
  { path: 'addAdvert', component: AddAdvertComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
