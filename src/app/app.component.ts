import { Component } from '@angular/core';
import {AuthService} from './modules/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(protected authService: AuthService) {}
  title = 'app';
}
