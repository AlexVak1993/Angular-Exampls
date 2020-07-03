import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Phrase } from '../shared/phrase.class';
import { PhraseService } from '../shared/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];

  // ROuter - спец сервис для работы с системой маршрутизации
  // Нужен для перенаправления с текущего компонента на другие компоненты приложения
  // PhraseService - созданный нами сервис
  constructor(private router: Router, private svc: PhraseService) { }

  ngOnInit(): void {
    this.svc
      .getAll()
      .then(result => this.phrases = result)
    // Как только Promise перейдет в состояние resolved результат его работы присвоится свойству phrases
  }

  onSelect(selected: Phrase) {
    this.router.navigate(['phrase', selected.id]);
  }

}
