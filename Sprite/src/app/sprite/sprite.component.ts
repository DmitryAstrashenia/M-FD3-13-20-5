import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css'],
})
export class SpriteComponent {
  @Input('url')
  public url: string;

  @Input('width')
  public width: number;

  @Input('height')
  public height: number;

  @Input('offsetX')
  public offsetX: number;

  @Input('offsetY')
  public offsetY: number;

  @Output('answerClick')
  private answerClickEE = new EventEmitter<void>();

  answerClick(): void {
    this.answerClickEE.emit();
  }
}
