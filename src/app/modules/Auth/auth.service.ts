import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  // return this.http.get<Adverts[]>('/api/users/register'); Run build
  logInUser(loginData) {
    return this.http.post('http://localhost:3000/api/users/login', loginData).subscribe(res => {
      console.log(res.token);
      localStorage.setItem('token', res.token);
    });
  }
  // return this.http.get<Adverts[]>('/api/users/register'); Run build
  registerUser(registerData) {
    return this.http.post('http://localhost:3000/api/users/register', registerData).subscribe(res => {
      console.log(res);
    });
  }


}
