import { Component, OnInit } from '@angular/core';
import {AdvertsService} from '../../adverts.service';
import {Adverts} from '../../adverts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-advert',
  templateUrl: './my-advert.component.html',
  styleUrls: ['./my-advert.component.css']
})
export class MyAdvertComponent implements OnInit {

  adverts: any = [];

  constructor(private advertsService: AdvertsService, private router: Router) { }

  ngOnInit() {
    this.advertsService.getUserAdvert().subscribe(adverts => {
      this.adverts = adverts;
      this.router.navigate(['/myAdverts']);
    });
  }

}
