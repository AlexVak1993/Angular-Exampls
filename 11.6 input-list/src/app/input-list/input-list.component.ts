import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss']
})
export class InputListComponent implements OnInit {

  list: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add(item: string): void {
    this.list.push(item)
  }

}
