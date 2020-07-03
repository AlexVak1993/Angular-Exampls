import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockItemComponent } from '../block-item/block-item.component';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  //Декоратор необходим для получения доступа к дочернему элементу
  //Получаем доступ только к первому найденому в шаблоне элементу с указанным классом
  @ViewChild(BlockItemComponent)
  private block: BlockItemComponent;
  //

  constructor() { }

  ngOnInit(): void {
  }

  showBlock() {
    this.block.show();
  }

}
