import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';

// Интерфейс для смены перенаправлений, необходимо реализовать для классов
export interface CanComponentDeactivate {
  //Обьявляем метод canDeactivate, который может принимать следующие значения
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

//Сервис нужен для настроек маршрута
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

  canDeactivate(component: CanComponentDeactivate) {
    //Проверяет наличие метода canDeactivate и выполняет его
    //Если метода нет, то выходить из компонента можно и вернем тру
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
