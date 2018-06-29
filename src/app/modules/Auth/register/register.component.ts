import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = {};

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  post() {
    this.authService.registerUser(this.registerData);
    this.router.navigate(['/adverts']);
  }
}
