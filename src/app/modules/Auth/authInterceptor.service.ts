import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}

  intercept(req, next) {
    let auth = this.injector.get(AuthService);
    const authRequest = req.clone({
      header: req.headers.set('Authorization', 'Bearer ' + auth.token)
    });
    return next.handle(authRequest);
  }
}
