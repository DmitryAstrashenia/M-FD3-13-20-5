import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css'],
})
export class HallComponent implements OnInit {
  constructor(private chairs: TicketsService) {}

  ngOnInit(): void {}

  getPlaces(): Array<number> {
    return this.chairs.getChairs();
  }
}
