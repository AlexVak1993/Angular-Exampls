import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service'

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss'],
  providers: [CounterService] // Данный класс сервыси использует свой экземпляр сервиса
})
export class Counter1Component implements OnInit {

  counter = 0;

  constructor(private svc: CounterService) { }

  ngOnInit(): void {
  }

  inc() {
    this.svc.increment();
    this.counter = this.svc.getValue()
  }

  dec() {
    this.svc.decrement();
    this.counter = this.svc.getValue()
  }

}
