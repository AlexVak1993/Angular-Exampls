import { Component, OnInit } from '@angular/core';
import {User} from '../user.class'

@Component({
  selector: 'app-form-few-errors',
  templateUrl: './form-few-errors.component.html',
  styleUrls: ['./form-few-errors.component.scss']
})
export class FormFewErrors implements OnInit {

  roles: string[] = ['Quest', 'Moderator', 'Administrator'];
  model: User = new User(1, '', '', null)

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

}
