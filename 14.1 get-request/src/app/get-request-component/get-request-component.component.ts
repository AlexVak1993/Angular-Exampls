import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item'

@Component({
  selector: 'app-get-request-component',
  templateUrl: './get-request-component.component.html',
  styleUrls: ['./get-request-component.component.scss']
})
export class GetRequestComponentComponent implements OnInit {

  items: Item[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }


  //this http get отправка get запроса по указанному адресу
  //Метод get возвращает обьект observable 
  //С помощью метода subscribe подписывает на событие, которое
  //произойдет после получения ответа от сервера
  getData(): void {
    this.http.get<Item[]>('/items').subscribe(
      result => this.items = result,
      error => console.log('error.statusText')
    );
  }
}