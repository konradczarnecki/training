import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Coin} from './model';
import {FetchService} from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  coinsObservable: Observable<Coin[]>;
  coins: Coin[];

  ratedCoins: Coin[];

  constructor(private fetchService: FetchService) {

  }

  ngOnInit() {

    this.coinsObservable = this.fetchService.getCoins();

    this.fetchService.getCoins().subscribe(coins => this.coins = coins);
  }

  coinRated(coinId: string, rating: number) {

    this.coins.find(cn => cn.id == coinId).rating = rating;
    this.ratedCoins = this.coins.filter(coin => !!coin.rating);
  }
}
