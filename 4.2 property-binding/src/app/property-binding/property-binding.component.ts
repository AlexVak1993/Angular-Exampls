import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  imageScr = 'https://shorturl.at/nCRX0';
  imageTitle = 'Title-text image';
  imageAlt = 'Alt-text image';
  isChecked = false;

  constructor() { }

  ngOnInit(): void {
  }

}
