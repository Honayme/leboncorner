import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {};

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  post() {
    this.loginService.logInUser(this.loginData).subscribe(loginData => {
      this.loginData = loginData;
      console.log((this.loginData));
    });

  }

}
