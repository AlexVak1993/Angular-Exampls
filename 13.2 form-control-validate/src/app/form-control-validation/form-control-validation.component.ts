import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-control-validation',
  templateUrl: './form-control-validation.component.html',
  styleUrls: ['./form-control-validation.component.scss']
})
export class FormControlValidationComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    //Validators - класс со статическим методом для волидации
    // Пр вызове конструктора FormControl первый параметр - значение его ввода
    // Второй параметр - валидатор или массив валидаторов 
    this.loginForm = new FormGroup({
      login: new FormControl('user', Validators.required),
      password: new FormControl('111', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(form) {
    console.log(form.valid);
    console.log(form.value);
  }

}
