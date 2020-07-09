import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {

  message = "Здесь появится текст, который будем вводить"

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(data): void {
    this.message = data
  }

}
