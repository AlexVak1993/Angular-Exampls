import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  //ngOnInit метод который вызывается один раз
  //Выполняет инициализацию компонента
  ngOnInit(): void {
    //Сработал метод ngOnInit при инициалихации компонента
    console.log(`ngOnInit --- "name" = "${this.name}"`);
  }

}
