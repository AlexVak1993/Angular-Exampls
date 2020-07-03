import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange}) {
    const msgArray: string[] = [];

    for (const propName in changes) {
      msgArray.push(`Свойство "${propName}", \n\tтекущее значение = ${changes[propName].currentValue}, \n\t\tпредыдущее значение = ${changes[propName].previousValue}`);

      console.log(msgArray.join('\n'));
    }
  }

}
