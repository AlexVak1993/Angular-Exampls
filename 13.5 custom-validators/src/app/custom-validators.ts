import { AbstractControl, ValidatorFn } from '@angular/forms'

//функция emailValidator является валидатором
//принимает интфейся типа AbstractControl
//возвращает массив, в котором хранятся строковые ключи - обьекты описывающие ошибку
export function emailValidator(control: AbstractControl): { [key: string]: any } {
  const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
  const value = control.value;
  const result = emailRegex.test(value);

  if (result) { 
    return null;
  } else {
    return { emailValidator: { value } };
  }
}

//функция rangeValidator принимает минимальное и максимальное значение
//rangeValidator является оберткой валидатора
export function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value = control.value;
    const numValue = +value;

    if (isNaN(numValue)) {
      return {rangeValidator: {value}};
    } else if (numValue < minValue || numValue > maxValue) {
      return {rangeValidator: {value}};
    } else {
      return null;
    }
  }
}