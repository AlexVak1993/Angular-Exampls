import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[myDelay]'
})
export class MyDelayDirective {

  constructor(private templateRef: TemplateRef<any>, private vievContainerRef: ViewContainerRef) { }

  @Input('myDelay') set delayTime(time: number) {
    setTimeout(() => {
      this.vievContainerRef.createEmbeddedView(this.templateRef)
    }, time);
  }
}
