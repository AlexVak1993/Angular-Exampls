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
    const phraseId = this.phrase ? this.phrase.id : null;
    // Испольщование относительного пути при перенаправлении 
    this.router.navigate(['../', { id: phraseId, param1: 'test', param2: 123 }],
      { relativeTo: this.aсtivatedRoute });
  }

}
