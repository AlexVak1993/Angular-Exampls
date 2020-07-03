import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlockItemComponent } from '../block-item/block-item.component';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  //Декоратор исспользуется для получения доступа ко всем 
  // дочерним элементам указанного компонента
  @ViewChildren(BlockItemComponent)
  private block: QueryList<BlockItemComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  showAllBlock() {
    this.block.forEach(block => block.show());
  }

}
