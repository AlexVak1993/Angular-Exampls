import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-pipe2',
  templateUrl: './simple-pipe2.component.html',
  styleUrls: ['./simple-pipe2.component.scss']
})
export class SimplePipe2Component implements OnInit {

  value = 12345;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(valueMetric, valueImperial): void {
    console.log('value metric:', valueMetric);
    console.log('value imperial:', valueImperial);
  }

}
