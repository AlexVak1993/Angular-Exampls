import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import {delay, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
    //Эмуляция задержки сервиса
    const result = of(true).pipe(delay(1000)); //Заглушка - вместо него должен быть сервер

    return result.pipe(map((val: boolean) => {
      if (login === 'admin' && password === '123') {
        return this.isLoggedIn = val;
      } 
      return false
    }));
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
