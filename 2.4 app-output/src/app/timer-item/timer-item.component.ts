import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.scss']
})
export class TimerItemComponent implements OnInit {

  private timerId: any = null;
  currentTimerValue = 0;

  @Input() timerInterval = 1000;

  @Output() tick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  timerStart() {
    if (this.timerId === null) {
      this.timerId = setInterval(
        () => this.timerIncrement(),
        this.timerInterval
      )
    }
  }

  timerStop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private timerIncrement() {
    this.tick.emit(++this.currentTimerValue);
  }
  
}
