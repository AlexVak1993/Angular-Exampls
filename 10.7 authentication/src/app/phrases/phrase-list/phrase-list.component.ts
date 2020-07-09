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
  selectedId: number;

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

  isSelected(phrase: Phrase) {
    // Сравнение id из phrase параметра и сравниваем его с selectedId, полученый из адресной строки выше
    return phrase.id === this.selectedId;
  }

  onSelect(selected: Phrase) {
    //Запомнили id кликнутого элемента
    this.selectedId = selected.id;
    //При клике по элементу перенаправление происходит по адресу phrases/id
    //Адрес указан параметром в routing.module
    this.router.navigate(['/phrases', selected.id]);
  }

}
