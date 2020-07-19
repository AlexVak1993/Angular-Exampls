import { Component, OnInit } from '@angular/core';

class Products {
  id: string;
  name: string;
  price: number;
  category: string;
  date: Date;
}

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.scss']
})
export class BuiltinPipesComponent implements OnInit {

  products: Products[];

  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      {id: 'DDF12D', name: 'Product 1', price: 100, category: 'Category 1', date: new Date(2020, 4, 7)},
      {id: 'DDS34S', name: 'Product 2', price: 200, category: 'Category 2', date: new Date(2020, 3, 21)},
      {id: 'WERT3F', name: 'Product 3', price: 30, category: 'Category 2', date: new Date(2020, 2, 11)},
      {id: 'EERG6E', name: 'Product 4', price: 25, category: 'Category 3', date: new Date(2020, 1, 3)},
      {id: 'FGFF8E', name: 'Product 5', price: 400, category: 'Category 3', date: new Date(2020, 5, 15)},
    ];
  }

}
