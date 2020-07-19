import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-pipe',
  templateUrl: './simple-pipe.component.html',
  styleUrls: ['./simple-pipe.component.scss']
})
export class SimplePipeComponent implements OnInit {

  value = 'Lorem ipsum text';

  constructor() {
  }

  ngOnInit(): void {
  }

}
