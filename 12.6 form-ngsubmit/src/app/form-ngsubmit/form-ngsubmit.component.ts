import { Component, OnInit } from '@angular/core';
import {User} from '../user.class'

@Component({
  selector: 'app-form-ngsubmit',
  templateUrl: './form-ngsubmit.component.html',
  styleUrls: ['./form-ngsubmit.component.scss']
})
export class FormNgSubmit implements OnInit {

  roles: string[] = ['Quest', 'Moderator', 'Administrator'];
  model: User = new User(1, '', '', null);
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }

  errorsLog(d: any): void {
    //Отображение списка ошибок в консоли
    console.log(d);
  }

  onSubmit(): void {
    console.log('Form submitted');
  }

}
