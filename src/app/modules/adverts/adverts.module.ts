import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './pages/adverts/adverts.component';
import { AdvertComponent } from './pages/advert/advert.component';
import { AddAdvertComponent } from './components/add-advert/add-advert.component';

@NgModule({
  imports: [
    CommonModule,
    AdvertsRoutingModule
  ],
  declarations: [AdvertsComponent, AdvertComponent, AddAdvertComponent]
})
export class AdvertsModule { }
