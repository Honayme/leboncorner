import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  //TODO Property 'token' does not exist on type 'Object'.
  // return this.http.get<Adverts[]>('/api/users/register'); Run build
  logInUser(loginData) {
    return this.http.post('http://localhost:3000/api/users/login', loginData).subscribe(res => {
      console.log(res);
      localStorage.set('token', res.token); // ng serve
    });
  }
  // return this.http.get<Adverts[]>('/api/users/register'); Run build
  registerUser(registerData) {
    return this.http.post('http://localhost:3000/api/users/register', registerData).subscribe(res => {
      console.log(res);
    });
  }


}
