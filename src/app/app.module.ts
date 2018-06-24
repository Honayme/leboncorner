import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import {AdvertsComponent} from './modules/adverts/pages/adverts/adverts.component';
import {AdvertComponent} from './modules/adverts/pages/advert/advert.component';
import {AddAdvertComponent} from './modules/adverts/components/add-advert/add-advert.component';
import {AdvertsService} from './modules/adverts/adverts.service';
import { routing } from './app.routing';
import { RegisterComponent } from './modules/Auth/register/register.component';
import { LoginComponent } from './modules/Auth/login/login.component';
import { AuthService } from './modules/Auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AdvertsComponent,
    AdvertComponent,
    AddAdvertComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AdvertsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
