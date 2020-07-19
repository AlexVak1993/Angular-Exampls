import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirectiveDirective {

  //TemplateRef - шаблон используемый для создания представления
  //ViewContainerRef - контейнер содержащий представление. Каждый контейнер привязан к элементу разметки
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input('myIf') set myIfValue(condition: boolean) {
    if (condition) {
      //На основе шаблона templateRef создается DOM-обьект
      //который размещается в viewContainerRef - то место, где директива была применена
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      //представление удаляется из контейнера
      this.viewContainerRef.clear();
    }
  }


}
