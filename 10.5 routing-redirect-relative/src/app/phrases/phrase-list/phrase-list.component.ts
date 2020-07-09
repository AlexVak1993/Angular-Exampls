import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];
  selectedId: number;

  constructor(private router: Router, 
              private svc: PhraseService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedId = +params.id; // берем id из адресной строки при инициализации компонента
      this.svc
      .getAll()
      .then(result => this.phrases = result)
    })
  }

  isSelected(phrase: Phrase) {
    // Сравнение id из phrase параметра и сравниваем его с selectedId, полученый из адресной строки выше
    return phrase.id === this.selectedId;
  }

  onSelect(selected: Phrase) {
    //Перенаправление пользователя используя относительный маршрут
    //В метод navigate параметром передаем в массиве одно значение - id
    //Вторым параметром передаем обьект с информацией о текущем маршруте
    //Свойство relativeTo получает из this activatedRoute - /phrases/id
    this.router.navigate([selected.id], {relativeTo: this.activatedRoute});
  }

}
