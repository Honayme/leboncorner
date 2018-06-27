import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  post() {
    this.authService.logInUser(this.loginData);
    this.router.navigate(['/adverts']);
  }

}
