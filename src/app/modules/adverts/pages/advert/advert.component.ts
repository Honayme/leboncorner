import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdvertsService} from '../../adverts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  advert = [];

  constructor(private route: ActivatedRoute,
              private advertsService: AdvertsService,
              public sanitize: DomSanitizer) { }

  ngOnInit() {
    this.advertsService.getDetail((this.route.snapshot.params['id'])).subscribe(advert => {
      this.advert = advert;
    });

  }

}
