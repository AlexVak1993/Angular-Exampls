import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = 0;

  constructor() { }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getValue() {
    return this.counter;
  }
}
