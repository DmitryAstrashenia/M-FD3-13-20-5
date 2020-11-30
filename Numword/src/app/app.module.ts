import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumwordComponent } from './numword/numword.component';
import { NumwordPipe } from './numword/numword.pupe';

@NgModule({
  declarations: [AppComponent, NumwordComponent, NumwordPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
