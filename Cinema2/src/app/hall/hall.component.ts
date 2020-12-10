import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css'],
})
export class HallComponent implements OnInit {
  constructor(private events: TicketsService) {}

  ngOnInit(): void {}

  getPlaces() {
    let places = [];
    this.events.getPlacesObservable().subscribe((arr) => (places = arr));
    return places;
  }
}
