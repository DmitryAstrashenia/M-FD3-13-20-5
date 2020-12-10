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
  public buyedTickets: Array<any> = null;

  getNumberFreeChairs() {
    return this.chairs.getNumberFreeChairs();
  }

  buyTickets(n: number) {
    this.buyedTickets = this.chairs.buyRandomTickets(n);
  }
}
