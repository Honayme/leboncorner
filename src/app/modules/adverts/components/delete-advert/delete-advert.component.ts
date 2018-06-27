import { Component, OnInit } from '@angular/core';
import {AdvertsService} from '../../adverts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Adverts} from '../../adverts';

@Component({
  selector: 'app-delete-advert',
  templateUrl: './delete-advert.component.html',
  styleUrls: ['./delete-advert.component.css']
})
export class DeleteAdvertComponent implements OnInit {

  Advert: Adverts;

  constructor(private advertsService: AdvertsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.advertsService.deleteAdvert(id)
      .subscribe((status: boolean) => {
        if (status) {
          this.router.navigate(['/adverts']);
        } else {
          console.log("Unable to delete advert");
        }
      });
  }

}

