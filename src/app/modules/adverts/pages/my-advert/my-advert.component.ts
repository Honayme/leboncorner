import { Component, OnInit } from '@angular/core';
import {AdvertsService} from '../../adverts.service';
import {Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-my-advert',
  templateUrl: './my-advert.component.html',
  styleUrls: ['./my-advert.component.css']
})
export class MyAdvertComponent implements OnInit {

  adverts: any = [];

  constructor(private advertsService: AdvertsService,
              private router: Router,
              public sanitize: DomSanitizer) { }

  ngOnInit() {
    this.advertsService.getUserAdvert().subscribe(adverts => {
      this.adverts = adverts;
      this.router.navigate(['/myAdverts']);
    });
  }

}
