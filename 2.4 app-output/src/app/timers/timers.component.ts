import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent implements OnInit {

  tickLog: number[] = [0, 0, 0];

  constructor() { }

  ngOnInit(): void {
  }

  logging(logPos, logValue) {
    this.tickLog[logPos] = logValue;
  }

}
