import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Coin} from './model';

@Injectable()
export class FetchService {

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coin[]> {

    return this.http.get<Coin[]>('https://api.coinmarketcap.com/v1/ticker/?limit=10');
  }
}
