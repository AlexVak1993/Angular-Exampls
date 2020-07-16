import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  searchWiki(term: string) {
    // url wiki api
    const wikiUrl = 'http://ru.wikipedia.org/w/api.php'
    // Настройка параметров для работы с wikipedia
    const params = new HttpParams()
      .set('action', 'opensearch')
      .set('search', term)
      .set('format', 'json');
    
      return this.http.jsonp(`${wikiUrl}?${params.toString()}`, 'callback');
    }

    parseResponse(data: any[]) {
      console.log(data) //результат выполнения запроса

      const l = data[1].length; //получение данных масива
      const result = []; //Инициализация результирующего массива
      for (let i = 0; i < l; i++) {
        result.push({
          name: data[1][i], //Тайтл
          description: data[2][i],
          link: data[3][i],
        });
      }
      return result;
    }

}
