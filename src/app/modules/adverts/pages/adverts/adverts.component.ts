import { Component, OnInit } from '@angular/core';
import {AdvertsService} from '../../adverts.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {

  adverts: any = [];
  constructor( private advertsService: AdvertsService) {}

  ngOnInit() {
    this.advertsService.getAll()
      .subscribe(res => {
        this.adverts = res;
        console.log((this.adverts));
      });
  }
}
