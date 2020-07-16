import { Component, OnInit } from '@angular/core';
import { User} from '../user.class'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

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
      pattern: 'Неправильный формат email адреса'  
    },
    age: {
      required: 'Возраст обязателен',
      pattern: 'Значение должно быть целым числом'
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
      email: [this.user.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,4}?')]],
      age: [this.user.age, [Validators.required, Validators.pattern('^\\d+')]],
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
          this.formErrors[field] +=message[key] + ' ';
        }
      }
    }
  }

  onSubmit(): void {
    console.log('Form submitted');
    console.log(this.userForm.value);
  }

}
