import { Component, OnInit } from '@angular/core';
import {User} from '../user.class'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  roles: string[] = ['Quest', 'Moderator', 'Administrator'];
  model: User = new User(0, '', '', 0)

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }

}
