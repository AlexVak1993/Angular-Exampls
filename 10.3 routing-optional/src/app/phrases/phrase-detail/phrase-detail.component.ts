import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';


@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit {

  phrase: Phrase;

  constructor(private router: Router, private aсtivatedRoute: ActivatedRoute, private svc: PhraseService) {
  }

  ngOnInit(): void {
    this.aсtivatedRoute.params.subscribe((params: Params) => {
      this.svc
        .getPhrase(+params.id)
        .then(result => this.phrase = result);
    })
  }

  goToPhraseList() {
    // Проверяем сузествует ли экземпляр phrase, если да то исп его id, если нет то null
    const phraseId = this.phrase ? this.phrase.id : null;
    // Обьект в массиве передаем с опциональными параметрами
    // param1, param2 для демонстрации
    this.router.navigate(['/phrases', {id: phraseId, param1: 'test', param2: 123}])
  }

}
