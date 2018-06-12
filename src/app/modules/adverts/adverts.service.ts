import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adverts } from './adverts';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdvertsService {

  constructor(private http: HttpClient) {
  }
    getAll(): Observable<Adverts[]> {
      return this.http.get<Adverts[]>('/api/adverts/all');
    }
}
