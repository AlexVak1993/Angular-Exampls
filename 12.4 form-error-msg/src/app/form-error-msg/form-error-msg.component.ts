import { Component, OnInit } from '@angular/core';
import {User} from '../user.class'

@Component({
  selector: 'app-form-error-msg',
  templateUrl: './form-error-msg.component.html',
  styleUrls: ['./form-error-msg.component.scss']
})
export class FormErrorMsg implements OnInit {

  roles: string[] = ['Quest', 'Moderator', 'Administrator'];
  model: User = new User(1, '', '', null)

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }

}
