import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {

  setting: any = {
    border: true,
    'border-dark': true,
    'text-light': true,
    'bg-secondary': true,
    rounded: true,
    'p-3': true,
    'mt-4': true
  };

  uncheckedClasses: any = {
    border: true,
    'border-danger': true,
    'text-dark': true,
    'bg-light': true,
    rounded: true,
    'p-3': true,
    'mt-4': true
  };

  checkedClasses: any = this.setting;

  isChecked = false;

  constructor() { }

  ngOnInit(): void {
  }

}
