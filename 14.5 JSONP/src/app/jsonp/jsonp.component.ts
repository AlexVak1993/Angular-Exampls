import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service'

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.scss']
})
export class JsonpComponent implements OnInit {

  items: any[] = [];

  //подключаем WikiService
  constructor(private wiki: WikiService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    //Вызываем метод searchWiki и передаем ему строку для поиска
    //Метод настраивает запрос в формате JSONP и выполняет его
    //Подписка на ответ производится здесь же
    //При получнии ответа вызываем еще один метод сервиса WikiService
    //parseResponse, который преобразует ответ в нужный им вариант предоставления данных
    this.wiki.searchWiki(term).subscribe((response: any[]) => this.items = this.wiki.parseResponse(response))
  }

}
