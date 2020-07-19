import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserCardContext } from './user-card.class';

@Directive({
  selector: '[userCard]'
})
export class UserCardDirective implements OnInit {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    const context: UserCardDirective = new UserCardContext('John', 'Smith');

    this.viewContainerRef.createEmbeddedView(this.templateRef, context);
  }
}
