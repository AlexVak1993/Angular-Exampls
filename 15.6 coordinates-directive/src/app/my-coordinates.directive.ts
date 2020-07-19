import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myCoordinates]'
})
export class MyCoordinatesDirective {

  constructor(private elementRef: ElementRef) { }


  //Установка обработчика на событие mousemove и передача параметра $event
  @HostListener('mousemove', ['$event']) onMouseMove(e: MouseEvent) {
    this.elementRef.nativeElement.innerHTML = `X: ${e.offsetX} | Y: ${e.offsetY}`;
  }
}
