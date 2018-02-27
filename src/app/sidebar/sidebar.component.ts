import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() ratedCoins: Coin[];

  constructor() { }

  ngOnInit() {
  }

}
