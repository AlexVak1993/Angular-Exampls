import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaining-pipes',
  templateUrl: './chaining-pipes.component.html',
  styleUrls: ['./chaining-pipes.component.scss']
})
export class ChainingPipesComponent implements OnInit {

  myDate: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
