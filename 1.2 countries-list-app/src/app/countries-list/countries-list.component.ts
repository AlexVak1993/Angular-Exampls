import { Component, OnInit } from '@angular/core';
import { Country } from './country.class';
import { COUNTRIES } from './mock.data'


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countriesList: Country[] = COUNTRIES;
  selectedCountryCapital: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(country: Country) {
    this.selectedCountryCapital = country.capital;
    console.log(this.selectedCountryCapital);
  }

}
