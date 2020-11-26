import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sprite';

  private url: string = 'http://fe.it-academy.by/Examples/cards2.png';
  private width: number = 143.5;
  private height: number = 193.5;
  private offsetX: number = 0;
  private offsetY: number = 0;

  getUrlImg(): string {
    return this.url;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getOffsetX(): number {
    return this.offsetX;
  }
  getOffsetY(): number {
    return this.offsetY;
  }

  move(): void {
    if (this.offsetX / this.width == -3) {
      this.offsetY -= this.height;
      this.offsetX = 0;
    }
    if (this.offsetY / this.height == -14) {
      this.offsetY = 0;
    }
    this.offsetX -= this.width;
  }
}
