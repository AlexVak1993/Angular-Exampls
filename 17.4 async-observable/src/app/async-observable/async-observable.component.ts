import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-async-observable',
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.scss']
})
export class AsyncObservableComponent implements OnInit {

  counter = 0;
  time: Observable<number>;

  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    this.time = new Observable<number>((observer: Subscriber<number>) => {
      setInterval(() => {
        observer.next(this.counter++);
      }, 1000);
    });
  }

}
