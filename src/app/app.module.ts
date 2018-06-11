import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AdvertsModule} from './modules/adverts/adverts.module';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AdvertsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
