import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertComponent} from './pages/advert/advert.component';
import {AddAdvertComponent} from './components/add-advert/add-advert.component';
import {AdvertsComponent} from './pages/adverts/adverts.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: AdvertsComponent},
  { path: 'adverts', component: AdvertsComponent},
  { path: 'advert', component: AdvertComponent},
  { path: 'add-advert', component: AddAdvertComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertsRoutingModule { }
