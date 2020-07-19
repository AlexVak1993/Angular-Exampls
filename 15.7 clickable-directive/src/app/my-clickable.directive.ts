import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[myClickable]'
})
export class MyClickableDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'cursor', 'pointed');
   }

   @HostBinding('class.pressed') isClicked = false;

   @HostListener('mousedown') onMouseDown() {
     this.isClicked = !this.isClicked
   }

   @HostListener('mouseup') onMouseUp() {
     this.isClicked = !this.isClicked
   }

}
