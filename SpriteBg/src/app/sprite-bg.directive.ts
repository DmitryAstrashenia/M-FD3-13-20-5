import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSpriteBg]',
})
export class SpriteBgDirective implements AfterViewInit {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  private urlDefault: string = 'http://fe.it-academy.by/Examples/smileys.png';
  private widthDefault: string = '25';
  private heightDefault: string = '25';
  private offsetXDefault: string = '-25';
  private offsetYDefault: string = '0';

  @Input('sprite-url')
  private url: string;

  @Input('sprite-width')
  private width: string;

  @Input('sprite-height')
  private height: string;

  @Input('sprite-offset-x')
  private offsetX: string;

  @Input('sprite-offset-y')
  private offsetY: string;

  ngAfterViewInit(): void {
    this.el.style.backgroundImage = `url(${`${this.url || this.urlDefault}`})`;
    this.el.style.width = `${this.width || this.widthDefault}` + 'px';
    this.el.style.height = `${this.height || this.heightDefault}` + 'px';
    this.el.style.backgroundPosition = `${
      this.offsetX || this.offsetXDefault
    }px ${this.offsetY || this.offsetYDefault}px`;
  }

  ngAfterViewChecked(): void {
    this.el.style.backgroundPosition = `${this.offsetX}px ${this.offsetY}px`;
  }
}
