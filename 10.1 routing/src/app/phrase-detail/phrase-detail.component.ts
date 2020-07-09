import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Phrase } from '../shared/phrase.class';
import { PhraseService } from '../shared/phrase.service';


@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit {

  phrase: Phrase;

  // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружается в outlet
  constructor(private router: Router, private aсtivatedRoute: ActivatedRoute, private svc: PhraseService) {
  }

  ngOnInit(): void {
    // Используем Observable обьект
    // Observable - это обьект, который может выдавать событие в определенный момент времени
    // Observable - чем-то похож на Промис и нужен для организации ассинхронного кода
    // Promise переходин из пендинга в ресолв/реджект единоразово
    // Observable в отличии от промиса может выполнять переход многократно

    // params - параметры текущего маршрута, если параметры будут изменены - произйдет событие и компонент узнает об изменениях
    // forEach - устанавливает обработчик на каждое изменение params
    // forEach будет заменен на subscribe далее

    this.aсtivatedRoute.params.forEach((params: Params) => {
      console.log(params);
      
      const id = +params.id;
      this.svc
        .getPhrase(id)
        .then(result => this.phrase = result);
    })
  }

  goToPhraseList() {
    this.router.navigate(['/phrases'])
  }

}
