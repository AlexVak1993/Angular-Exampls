import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myConfirm]'
})
export class MyConfirmDirective {

  @Input('myConfirm') onConfirmed;

  constructor() { }

  @HostListener('click') onConfirm() {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      this.onConfirmed();
    }
  }

}
