import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  //ActivatedRouteSnapshot -информация о маршруте связанным с  загружаемым контентом
  //RouterStateSnapshot - свойство маршрута в определенный отрезк времени
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //Проверка, авторизован ли пользователь
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.authService.redirectUrl = state.url;
      this.router.navigate(['login']);
      return false;
    }
  }
}
