import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];

  constructor(private router: Router,
    private svc: PhraseService,
    private activatedRoute: ActivatedRoute) { }


    //За счет Observable переход происходит без перезагрузки страницы
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.svc
        .getAll()
        .then(result => this.phrases = result)
    })
  }

  onSelect(selected: Phrase) {
    this.router.navigate(['/phrase', selected.id]);
  }

}
