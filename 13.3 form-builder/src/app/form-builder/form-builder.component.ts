import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  loginForm: FormGroup;


  //FormBuilder класс, предоставляющий удобный интерфейс 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //Метод group класса FormBuilder передает в качестве параметра обьект
    // который описывает структуру модели формы
    // Данная запись более наглядна и лучше читается 
    this.loginForm = this.fb.group({
      login: ['user', Validators.required],
      password: ['111', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(form) {
    console.log(form.valid);
    console.log(form.value);
  }

}
