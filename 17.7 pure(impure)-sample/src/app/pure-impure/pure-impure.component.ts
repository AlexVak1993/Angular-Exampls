import { Component, OnInit } from '@angular/core';
import { Person } from '../person.class';

@Component({
  selector: 'app-pure-impure',
  templateUrl: './pure-impure.component.html',
  styleUrls: ['./pure-impure.component.scss']
})
export class PureImpureComponent implements OnInit {

  person1 = new Person('John', 'Smith');
  person2 = new Person('Bob', 'Marley');

  constructor() {
  }

  ngOnInit(): void {
  }

  changePropPerson1() {
    this.person1.lastName = '...prop...';
  }

  changeRefPerson1() {
    this.person1 = {firstName: '...ref...', lastName: '...red...'};
  }

  changePropPerson2() {
    this.person2.lastName = '...prop...';
  }

  changeRefPerson2() {
    this.person2 = {firstName: '...ref...', lastName: '...red...'};
  }

}
