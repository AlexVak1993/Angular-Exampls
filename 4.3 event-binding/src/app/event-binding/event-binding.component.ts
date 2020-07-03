import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  onClickMessage = 'Needed to click button';
  onMouseMessage = 'To bring cursor on button'

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    switch (this.onClickMessage) {
      case ('Нужно кликнуть кнопку'):
        this.onClickMessage = 'На кнопку кликнули';
        break;
      case ('На кнопку кликнули'):
        this.onClickMessage = 'Кликнули еще раз';
        break;
      case ('Кликнули еще раз'):
        this.onClickMessage = 'Снова кликнули';
        break;
      default:
        this.onClickMessage = 'Нужно кликнуть кнопку';
    }
  }

  onMouseEnter() {
    this.onMouseMessage = 'Курсор над кнопкой';
  }

  onMouseLeave() {
    this.onMouseMessage = 'Курсор за пределами кнопки'
  }

  testEvent(e) {
    console.log(e);
  }

}
