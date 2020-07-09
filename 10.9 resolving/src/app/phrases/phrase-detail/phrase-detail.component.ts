import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Phrase } from '../../shared/phrase.class';
import { CanComponentDeactivate } from '../../shared/can-deactivate-guard.service';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit, CanComponentDeactivate {

  phrase: Phrase;
  //Поля для редактирования
  editValue: string;
  editLanguage: string;

  constructor(private aсtivatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService) {
  }

  ngOnInit(): void {
    this.aсtivatedRoute.data.subscribe((data: { phrase: Phrase }) => {
      //phrase инициализируется с помощью PhraseDetailResolve, Который указан в настр сист маршрутизации
      // В текущей реализации компонент избавился от зависисмости PhraseService
      this.phrase = data.phrase;
      this.editValue = this.phrase.value;
      this.editLanguage = this.phrase.language;
    })
  }

  //Метод для сохранения данных
  save() {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
  }

  //метод для определения изменений данных фразы
  //false - данные не изменились
  //true - есть изменения хотя бы в одном поле
  isChanged(): boolean {
    return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage)
  }

  //Метод для проверки возможности перенаправления пользователя на другой маршрут
  canDeactivate(): Promise<boolean> | boolean {
    if (!this.phrase) {
      return true;
    } else if (!this.isChanged()) {
      return true;
    }
    return confirm('Вы не сохраниили изменения. \nДанные будут потеряны. \nУйти со страницы в любом случае?')
  }

  goToPhrasesList() {
    this.router.navigate(['phrases'])
  }

}
