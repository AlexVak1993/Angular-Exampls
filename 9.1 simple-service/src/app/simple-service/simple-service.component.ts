import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.scss'],
  providers: [DataService]
})
export class SimpleServiceComponent implements OnInit {

  itemSource: string[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.itemSource = this.dataService.getData();
  }

}
