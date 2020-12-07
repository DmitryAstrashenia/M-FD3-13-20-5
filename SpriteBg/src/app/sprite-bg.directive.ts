import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appSpriteBg]',
})
export class SpriteBgDirective implements AfterViewInit {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @Input('appSpriteBg')
  private url: string;

  @Input('appSpriteBgWidth')
  private width: number;

  @Input('appSpriteBgHeight')
  private height: number;

  @Input('appSpriteBgOffsetX')
  private offsetX: number;

  @Input('appSpriteBgOffsetY')
  private offsetY: number;

  ngAfterViewInit(): void {
    this.el.style.backgroundImage = 'url(' + this.url + ')';
    this.el.style.width = this.width + 'px';
    this.el.style.height = this.height + 'px';
  }

  ngAfterViewChecked(): void {
    this.el.style.backgroundPosition =
      this.offsetX + 'px' + ' ' + this.offsetY + 'px';
  }
}
