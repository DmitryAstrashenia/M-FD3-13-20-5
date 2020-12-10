import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { TicketsService } from './tickets.service';
import { CashComponent } from './cash/cash.component';

@NgModule({
  declarations: [AppComponent, HallComponent, CashComponent],
  imports: [BrowserModule],
  providers: [TicketsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
