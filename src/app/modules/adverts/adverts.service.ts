import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()

export class AdvertsService {

  constructor(private http: HttpClient) {
    getAllPosts() {
      return this.http.get('/api/adverts/all').subscribe(res => {
        console.log(res);
      });
    }
  }
}
