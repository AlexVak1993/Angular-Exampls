import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../item'

@Component({
  selector: 'app-request-options',
  templateUrl: './request-options.component.html',
  styleUrls: ['./request-options.component.scss']
})
export class RequestOptionComponent implements OnInit {

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


  //this http get отправка get запроса по указанному адресу
  //Метод get возвращает обьект observable 
  //С помощью метода subscribe подписывает на событие, которое
  //произойдет после получения ответа от сервера
  getData(): void {
    this.http.get<Item[]>('/items').subscribe(
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const options = {headers};

    //post запрос c указанием адреса, данных и опций
    this.http.post<Item>(url, data, options).subscribe(
      result => this.items.push(result),
      error => console.log(error.statusText)
    );
  }

  clearGet() {
    this.items.length = 0;
    this.getData();
  }
}