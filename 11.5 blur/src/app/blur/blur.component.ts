import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blur',
  templateUrl: './blur.component.html',
  styleUrls: ['./blur.component.scss']
})
export class BlurComponent implements OnInit {

  message = 'Здесь появится текст, который будем вводить'

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(data): void {
    this.message = data;
  }

}
