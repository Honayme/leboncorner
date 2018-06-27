import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {AdvertsComponent} from './modules/adverts/pages/adverts/adverts.component';
import {AdvertComponent} from './modules/adverts/pages/advert/advert.component';
import {AddAdvertComponent} from './modules/adverts/components/add-advert/add-advert.component';
import {RegisterComponent} from './modules/Auth/register/register.component';
import {LoginComponent} from './modules/Auth/login/login.component';
import {MyAdvertComponent} from './modules/adverts/pages/my-advert/my-advert.component';
import {DeleteAdvertComponent} from './modules/adverts/components/delete-advert/delete-advert.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'adverts'},
  { path: 'adverts', component: AdvertsComponent},
  { path: 'myAdverts', component: MyAdvertComponent},
  { path: 'advert/:id', component: AdvertComponent},
  { path: 'addAdvert', component: AddAdvertComponent},
  { path: 'updateAdvert/:id', component: AddAdvertComponent},
  { path: 'deleteAdvert/:id', component: DeleteAdvertComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
