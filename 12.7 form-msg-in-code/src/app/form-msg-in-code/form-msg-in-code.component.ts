import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user.class'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-msg-in-code',
  templateUrl: './form-msg-in-code.component.html',
  styleUrls: ['./form-msg-in-code.component.scss']
})
export class MsgInCode implements OnInit {

  roles: string[] = ['Quest', 'Moderator', 'Administrator'];
  model: User = new User(1, '', '', null);
  submitted = false;

  //Обьект с ошибками, которые будут выводиться пользователю
  formErrors = {
    name: '',
    age: ''
  };

  //Обьект с компонентами об ошибках
  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 4 charecters long.'
    },
    age: {
      required: 'Age is required.'
    }
  };

  @ViewChild('userForm') userForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //Когда закончится инициализация шаблонов
    //с помощью метода subscribe жобавляем обращения
    //которые будет на каждое изменение в форме запускать метод onValueChanged
    //который в качестве параметра будет принимать обьект, описываемый произошедшим изменением
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    //Если форма не инициализирована
    if (!this.userForm) {
      return;
    }
    //Форму добавляем в переменную
    const form = this.userForm.form;

    for (const field in this.formErrors) {
      //Затираем сообщение об ошибках
      this.formErrors[field] = '';
      //Получаем элемент управления
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];

        for (const key in control.errors) {
          console.log(message[key]);
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('Form Submitted');
  }

}
