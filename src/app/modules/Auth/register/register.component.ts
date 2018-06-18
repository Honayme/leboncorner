import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../resgister.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = {};

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  post() {
    this.registerService.sendUserRegistration(this.registerData).subscribe(registerData => {
      this.registerData = registerData;
      console.log((this.registerData));
    });

  }
}
