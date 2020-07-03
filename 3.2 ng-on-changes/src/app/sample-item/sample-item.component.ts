import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    //ngOnChanges method works
    console.log(`ngOnChanges --- "value" = "${this.value}".`);
  }

}
