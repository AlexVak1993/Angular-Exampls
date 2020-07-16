import { Component, OnInit } from '@angular/core';
import { User } from '../user.class'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { emailValidator, rangeValidator } from '../custom-validators'


@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.scss']
})
export class CustomValidatorsComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User(1, null, null, null, null, null);
  roles: string[] = ['Гость', 'Модератор', 'Администратор'];

  formErrors = {
    login: '',
    password: '',
    email: '',
    age: '',
    role: ''
  };

  validationMessages = {
    login: {
      required: 'Имя обязательно',
      minlength: 'Имя должно содержаь не менее 4 символов',
      maxlength: 'Имя должно содержать не более 15 символов'
    },
    password: {
      required: 'Пароль обязателен',
      minlength: 'Пароль должен содержаь не менее 7 символов',
      maxlength: 'Пароль должен содержать не более 25 символов'
    },
    email: {
      required: 'Email обязателен',
      emailValidator: 'Неправильный формат email адреса'
    },
    age: {
      required: 'Возраст обязателен',
      rangeValidator: 'Значение должно быть целым числом в диапазоне 1..122'
    },
    role: {
      required: 'Обязательное поле'
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      login: [this.user.login, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 122)]],
      role: [this.user.role, [Validators.required]]
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  onSubmit(): void {
    console.log('Form submitted');
    console.log(this.userForm.value);
  }

}
