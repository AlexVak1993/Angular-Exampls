import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //Guard - механизм для выполнения проверок перед активацией и деактивацией маршрута
  //CanActivate - определяет возможность активации маршрута
  //CanDeactivate - определяет возможно ли уйти с данного маршрута

  //Установка обьектов Guard происходит при настройке маршрутизации

  constructor() { }

  canActivate() {
    const value = true;
    console.log(`AuthGuard canActivate return ${value}`);
    return value
  }
}
