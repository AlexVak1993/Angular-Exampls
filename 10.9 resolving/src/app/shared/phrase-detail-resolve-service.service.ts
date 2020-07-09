import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

import { Phrase } from './phrase.class';
import { PhraseService } from './phrase.service'

@Injectable({
  providedIn: 'root'
})

export class PhraseDetailResolveService implements Resolve<Phrase | boolean> {
  constructor(private router: Router, private svc: PhraseService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Phrase | boolean> {
    const id = +route.params.id

    return this.svc.getPhrase(id).then(phrase => {
      if (phrase) {
        return phrase;
      } else {
        this.router.navigate(['/phrases']);
        return false;
      }
    })
  }

}