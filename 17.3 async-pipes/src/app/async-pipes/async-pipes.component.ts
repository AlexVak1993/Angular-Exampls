import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipes',
  templateUrl: './async-pipes.component.html',
  styleUrls: ['./async-pipes.component.scss']
})
export class AsyncPipesComponent implements OnInit {

  mockData: Promise<string> = null;
  resolvePromise: (value?: (PromiseLike<string> | string)) => void = null;

  constructor() {
  }

  ngOnInit(): void {
    this.mockData = new Promise<string>((resolve) => {
      this.resolvePromise = resolve;
    });
  }

  getData(): void {
    setTimeout(() => {
      this.resolvePromise('Data from server received');
    }, 2000);
  }

}
