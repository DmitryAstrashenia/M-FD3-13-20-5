import { Component } from '@angular/core';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private chairs: TicketsService) {}

  title = 'Cinema';
  buyedTickets: Array<any> = null;

  getNumberFreeChairs(): number {
    let count = 0;
    this.chairs.getChairs().forEach((item) => {
      if (item) {
        count++;
      }
    });
    return count;
  }

  buyTickets(n: number) {
    this.buyedTickets = this.chairs.buyRandomTickets(n);
  }
}
