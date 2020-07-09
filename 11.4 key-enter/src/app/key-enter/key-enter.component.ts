import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-enter',
  templateUrl: './key-enter.component.html',
  styleUrls: ['./key-enter.component.scss']
})
export class KeyEnterComponent implements OnInit {

  message = 'Здесь появится текст, который будем вводить'

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(data): void {
    this.message = data
  }

}
