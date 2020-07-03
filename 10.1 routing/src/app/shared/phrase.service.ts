import { Injectable } from '@angular/core';
import { Phrase } from './phrase.class';
import { PHRASES } from './mock-data';

// Promise, который сразу переходит в состояние resolved с данными из массива phrases
const phrasesPromise = Promise.resolve(PHRASES);

// Сервис для работы с данными. 
@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor() { }

  // Метод для получения всех фраз. Возвращение Promise с массивом Phrase
  getAll(): Promise<Phrase[]> {
    return phrasesPromise;
  }

  // Метод для получения фразу по id. Возвращаем Promise с экзмпляром Phrase
  getPhrase(id: number): Promise<Phrase> {
    return phrasesPromise
           .then(phrases => phrases.find(phrase => phrase.id === id));
  }
}
