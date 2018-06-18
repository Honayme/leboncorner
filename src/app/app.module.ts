import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import {AdvertsComponent} from './modules/adverts/pages/adverts/adverts.component';
import {AdvertComponent} from './modules/adverts/pages/advert/advert.component';
import {AddAdvertComponent} from './modules/adverts/components/add-advert/add-advert.component';
import {AdvertsService} from './modules/adverts/adverts.service';
import {routing} from './app.routing';
import { RegisterComponent } from './modules/Auth/register/register.component';
import { LoginComponent } from './modules/Auth/login/login.component';
import { RegisterService } from './modules/Auth/resgister.service';
import { LoginService } from './modules/Auth/login.service';

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
    routing
  ],
  providers: [AdvertsService, RegisterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
