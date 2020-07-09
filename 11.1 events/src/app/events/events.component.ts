import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  message = 'Default string'

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(): void {
    this.message = 'New string here!'
  }

}
