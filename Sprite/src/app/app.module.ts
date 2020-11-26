import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpriteComponent } from './sprite/sprite.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpriteComponent, AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
