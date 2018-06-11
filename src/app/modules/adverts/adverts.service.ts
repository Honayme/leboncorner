import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AdvertsService {

  constructor(private httpClient: HttpClient) {}
    getAllAdverts() {
      return this.httpClient.get('/api/adverts');
    }
}
