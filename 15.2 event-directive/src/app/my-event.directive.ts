import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myEvent]'
})
export class MyEventDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  //HostListener - ссылается на DOM элемент, который содержит директиву
  //Устанавливаем обраточик mouseenter
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('red', 'bold');
  }

  //Устанавливаем обработчик mouseleave
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null, null);
  }

  private changeColor(cl: string, fw: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', cl);
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', fw);
  }
}
