import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-directive',
  templateUrl: './confirm-directive.component.html',
  styleUrls: ['./confirm-directive.component.scss']
})
export class ConfirmDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(): void {
    console.log('onDelete was called');
    alert('onDelete was called');
  }

}
