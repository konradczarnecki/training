import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() name: string;
  @Input() price: string;
  @Output() rate = new EventEmitter<number>();

  _rating: number;

  set rating(value: number) {
    this._rating = value;
    this.rate.emit(value);
  }

  get rating() {
    return this._rating;
  }

  constructor() {
    this._rating = 1;
  }

  ngOnInit() {
  }

}
