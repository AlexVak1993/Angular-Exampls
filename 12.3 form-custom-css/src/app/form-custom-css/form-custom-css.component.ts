import { Component, OnInit } from '@angular/core';
import {User} from '../user.class'

@Component({
  selector: 'app-form-custom-css',
  templateUrl: './form-custom-css.component.html',
  styleUrls: ['./form-custom-css.component.scss']
})
export class FormCustomCssComponent implements OnInit {

  roles: string[] = ['Quest', 'Moderator', 'Administrator'];
  model: User = new User(1, '', '', null)

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }

}
