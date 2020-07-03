import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

}
