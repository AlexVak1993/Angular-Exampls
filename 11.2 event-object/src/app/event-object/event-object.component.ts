import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-object',
  templateUrl: './event-object.component.html',
  styleUrls: ['./event-object.component.scss']
})
export class EventObjectComponent implements OnInit {

  message = ''

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: KeyboardEvent): void {
    //Приводит event target к типу HTMLInputElement
    this.message += `${(event.target as HTMLInputElement).value} | `;
  }
//Аналогичные решения с испольщованием типа any
// onKeyAny(event: any): void {
//   this.message += `${event.target.value} | `
// }
}
