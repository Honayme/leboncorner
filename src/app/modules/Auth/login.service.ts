import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  logInUser(loginData) {
    //return this.http.get<Adverts[]>('/api/users/register'); Run build
    return this.http.post('http://localhost:3000/api/users/login', loginData); // ng serve
  }
}
