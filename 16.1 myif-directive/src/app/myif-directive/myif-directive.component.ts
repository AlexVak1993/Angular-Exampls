import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myif-directive',
  templateUrl: './myif-directive.component.html',
  styleUrls: ['./myif-directive.component.scss']
})
export class MyifDirectiveComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

}
