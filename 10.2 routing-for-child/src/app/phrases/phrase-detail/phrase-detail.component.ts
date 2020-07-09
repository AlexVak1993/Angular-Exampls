import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

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
    //Заменили обработку компонентов в цекле с помошью forEach на подписку событий subskribe
    //Метод subscribe позволяет установить подписку на изменение параметра маршрута
    this.aсtivatedRoute.params.subscribe((params: Params) => {     
      this.svc
        .getPhrase(+params.id)
        .then(result => this.phrase = result);
    })
  }

  goToPhraseList() {
    this.router.navigate(['/phrases'])
  }

}
