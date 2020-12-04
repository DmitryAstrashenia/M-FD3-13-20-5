import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css'],
})
export class CashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('status')
  public status: string;

  @Output('btnBuy')
  private btnBuyEE = new EventEmitter<number>();

  private pieces: number = 1;

  getPieces(): number {
    return this.pieces;
  }

  btnPlus() {
    this.pieces++;
  }

  btnMinus() {
    if (this.pieces <= 1) {
      this.pieces = 1;
    } else {
      this.pieces--;
    }
  }

  btnBuy(): void {
    this.btnBuyEE.emit(this.getPieces());
  }
}
