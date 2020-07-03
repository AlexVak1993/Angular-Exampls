import { Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit {

  count = 0;

  //Декоратор необходим для получния доступа к компонентам
  //полученнем через ng-content
  @ContentChildren(ItemComponent)
  items: QueryList<ItemComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.count = this.items.length;
    this.items.forEach((item, i) => item.increment(i))
  }

}
