import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor() {}

  totalСhairs = 20;

  private chairs: Array<boolean> = new Array(this.totalСhairs).fill(true);
  private events$: Observable<Array<boolean>> = new Observable((observer) => {
    observer.next(this.chairs);
  });

  getChairs() {
    return this.chairs;
  }

  getNumberFreeChairs(): number {
    let count = 0;
    this.chairs.forEach((item) => {
      if (item) {
        count++;
      }
    });
    return count;
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

  getPlacesObservable(): Observable<Array<boolean>> {
    return this.events$;
  }
}
