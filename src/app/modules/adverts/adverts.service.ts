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
      // return this.http.get<Adverts[]>('/api/adverts/all'); Run build
      return this.http.get<Adverts[]>('http://localhost:3000/api/adverts/all');
    }

    getDetail(id: number): Observable<Adverts[]> {
      return this.http.get<Adverts[]>('http://localhost:3000/api/adverts/detail/' + id);
    }

    getUserAdvert(): Observable<Adverts[]> {
      return this.http.get<Adverts[]>('http://localhost:3000/api/adverts/me');
    }

    createAdvert(data): Observable<Adverts[]> {
      return this.http.post<Adverts[]>('http://localhost:3000/api/adverts/create', data);
    }

    updateAdvert(data): Observable<Adverts[]> {
      return this.http.put<Adverts[]>('http://localhost:3000/api/adverts/update', data.id);
    }

    deleteAdvert(id: number): Observable<Adverts[]> {
      return this.http.delete<Adverts[]>('http://localhost:3000/api/adverts/delete');
    }
}
