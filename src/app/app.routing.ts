import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdvertsModule} from './modules/adverts/adverts.module';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'adverts'},
  { path: 'adverts', loadChildren: './modules/adverts/adverts.module#AdvertsModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
