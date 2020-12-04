import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  totalСhairs = 20;

  constructor() {}

  private chairs = new Array(this.totalСhairs).fill(true);

  getChairs() {
    return this.chairs;
  }

  buyRandomTickets(n: number) {
    let options = [];
    let buyedTickets = [];
    for (let i = 0; i <= this.chairs.length - n; i++) {
      let option = {};
      for (let j = i; j < i + n; j++) {
        option[j] = this.chairs[j];
      }
      if (Object.values(option).indexOf(false) == -1) {
        options.push(option);
      }
    }
    let random = Math.floor(Math.random() * options.length);
    for (let key in options[random]) {
      this.chairs[key] = false;
      buyedTickets.push(Number(key) + 1);
    }
    return buyedTickets;
  }
}
