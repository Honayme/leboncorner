import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AdvertsComponent} from './modules/adverts/pages/adverts/adverts.component';
import { AdvertComponent} from './modules/adverts/pages/advert/advert.component';
import { AddAdvertComponent} from './modules/adverts/components/add-advert/add-advert.component';
import { AdvertsService} from './modules/adverts/adverts.service';
import { routing } from './app.routing';
import { RegisterComponent } from './modules/Auth/register/register.component';
import { LoginComponent } from './modules/Auth/login/login.component';
import { AuthService } from './modules/Auth/auth.service';
import { AuthInterceptorService } from './modules/Auth/authInterceptor.service';
import { MyAdvertComponent } from './modules/adverts/pages/my-advert/my-advert.component';
import { DeleteAdvertComponent } from './modules/adverts/components/delete-advert/delete-advert.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertsComponent,
    AdvertComponent,
    AddAdvertComponent,
    RegisterComponent,
    LoginComponent,
    MyAdvertComponent,
    DeleteAdvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AdvertsService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
