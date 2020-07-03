import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel-inside',
  templateUrl: './ngmodel-inside.component.html',
  styleUrls: ['./ngmodel-inside.component.scss']
})
export class NgmodelInsideComponent implements OnInit {

  currentValue: string;

  constructor() { 
    this.currentValue = '';
  }

  ngOnInit(): void {
  }

}
