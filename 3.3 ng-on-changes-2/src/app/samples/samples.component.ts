import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  nameValue: string;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  private getTimerString = (): string => {
    const d = new Date();
    return `name-${d.getMinutes()}-${d.getSeconds()}-${d.getMilliseconds()}`
  }

  changeName() {
    this.nameValue = this.getTimerString();
  }

  changeValue() {
    this.counter++;
  }

  changeBoth() {
    this.changeName();
    this.counter++;
  }

}
