import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './pages/adverts/adverts.component';
import { AdvertComponent } from './pages/advert/advert.component';
import { AddAdvertComponent } from './components/add-advert/add-advert.component';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdvertsService } from './adverts.service';


@NgModule({
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdvertsRoutingModule
  ],
  declarations: [
    AdvertsComponent,
    AdvertComponent,
    AddAdvertComponent
  ],
  providers: [AdvertsService],
  bootstrap: [AdvertsComponent]
})
export class AdvertsModule { }
