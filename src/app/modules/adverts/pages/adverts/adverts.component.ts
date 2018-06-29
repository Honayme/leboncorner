import { Component, OnInit } from '@angular/core';
import { AdvertsService} from '../../adverts.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../../Auth/auth.service';


@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {

  adverts: any = [];

  constructor( private advertsService: AdvertsService,
               public authService: AuthService,
               public sanitize: DomSanitizer) {}

  ngOnInit() {
    this.advertsService.getAll().subscribe(adverts => {
        this.adverts = adverts;
        console.log((this.adverts));
      });
  }
}
