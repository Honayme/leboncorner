import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adverts } from './adverts';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdvertsService {

  constructor(private http: HttpClient) {
  }

    path = 'http://localhost:3000/api/adverts';

    getAll(): Observable<Adverts[]> {
      return this.http.get<Adverts[]>(this.path + '/all');
    }

    getDetail(id: number): Observable<Adverts[]> {
      return this.http.get<Adverts[]>(this.path + '/detail/' + id);
    }

    getUserAdvert(): Observable<Adverts[]> {
      return this.http.get<Adverts[]>(this.path + '/me');
    }

    createAdvert(data): Observable<Adverts[]> {
      return this.http.post<Adverts[]>(this.path + '/create', data);
    }

    updateAdvert(data): Observable<Adverts> {
      return this.http.put<Adverts>(this.path + '/update' , data);
    }

    deleteAdvert(id: number): Observable<boolean> {
      return this.http.delete<boolean>(this.path + '/delete/' + id);
    }
}
