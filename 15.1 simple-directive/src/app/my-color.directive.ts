import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class MyColorDirective {

  //ElementRef - ссылка на тот элемент, где было установлена директива
  //Renderer2 - испольщуется в основном для манипуляций над существующими элементами,
  //например для изменения стилей элемента, атрибутов и параметров элемента.
  //Наиболее часто его испольщование можно встретить при создании директив
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'red');
    renderer.setStyle(elementRef.nativeElement, 'font-weight', 'bold')
   }

}
