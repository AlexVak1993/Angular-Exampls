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
  constructor(private router: Router, private avtivatedRoute: ActivatedRoute, private svc: PhraseService) {
  }

  ngOnInit(): void {
    this.avtivatedRoute.params.forEach((params: Params) => {
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
