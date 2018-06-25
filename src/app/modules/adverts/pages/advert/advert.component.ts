import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdvertsService} from '../../adverts.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  advert = [];

  constructor(private route: ActivatedRoute, private advertsService: AdvertsService) { }

  ngOnInit() {
    this.advertsService.getDetail((this.route.snapshot.params['id'])).subscribe(advert => {
      this.advert = advert;
      console.log((this.advert));
    });
  }

}
