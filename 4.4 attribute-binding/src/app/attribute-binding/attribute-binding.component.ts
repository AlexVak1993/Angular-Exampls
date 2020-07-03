import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {

  value = 100;

  constructor() { }

  ngOnInit(): void {
  }

  increaseSize() {
    this.value++;
  }

  decreaseSize() {
    this.value--;
  }

}
