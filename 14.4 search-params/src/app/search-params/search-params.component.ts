import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Item } from '../item'

@Component({
  selector: 'app-search-params',
  templateUrl: './search-params.component.html',
  styleUrls: ['./search-params.component.scss']
})
export class SearchParamsComponent implements OnInit {

  item: Item = {
    id: null,
    name: null
  };
  items: Item[];
  itemsUrl = 'items';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    //Определение url запрос
    const url = this.itemsUrl;
    //Определение пользовательскаих заголовков
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    //Определение параметров запроса
    let params = new HttpParams();
    if (this.item.id) {
      //HttpHeaders немутабельный, поэтому метод set можна вызвать по цепочке
      //Но params.set не модифицирует существующий обьект парамс
      params = params.set('id', this.item.id + '');
    }
    if (this.item.name) {
      params = params.set('name', this.item.name);
    }
    //Создание опция для запроса
    const options = {headers, params};

    this.http.get<Item[]>(url, options).subscribe(
      result => this.items = result,
      error => console.log(error.statusText)
    );
  }

  postData(): void | boolean {
    if (!this.item.id || !this.item.name) {
      alert('Поля Id или Name не заполнены');
      return false;
    } else if (this.item.id <= this.items[this.items.length - 1].id) {
      alert('Введенный Id уже существует');
      return false
    }

    //Определяем url запроса
    const url = this.itemsUrl;
    //Создание обьекта для отправки на сервер
    const data = {
      id: this.item.id,
      name: this.item.name
    };
    //Определение пользовтельских заголовков
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json'
    );
    const options = {headers};

    //post запрос c указанием адреса, данных и опций
    this.http.post<Item>(url, data, options).subscribe(
      result => this.items.push(result),
      error => console.log(error.statusText)
    );
  }

  clearGet() {
    this.items.length = 0;
    this.item.id = null;
    this.item.name = null;
    this.getData();
  }
}