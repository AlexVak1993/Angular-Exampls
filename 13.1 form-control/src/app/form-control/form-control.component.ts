import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('user'),
      password: new FormControl('111')
    })
  }

  onSubmit(form) {
    console.log(form.valid);
    console.log(form.value);
  }

}
