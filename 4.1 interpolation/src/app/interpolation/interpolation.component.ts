import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  userFirstName: string;
  userLastName: string;
  userAge: number;

  constructor() {
    this.userFirstName = 'John';
    this.userLastName = 'Barber';
    this.userAge = 30;
   }

  ngOnInit(): void {
  }

  userFullName() {
    return `${this.userFirstName} ${this.userLastName}`
  }

}
