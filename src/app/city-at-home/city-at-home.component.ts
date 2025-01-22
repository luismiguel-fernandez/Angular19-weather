import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { TempPipe } from '../temp.pipe';
import { CountryCodePipe } from '../country-code.pipe';

@Component({
  selector: 'app-city-at-home',
  imports: [ TempPipe, CountryCodePipe ],
  templateUrl: './city-at-home.component.html',
  styles: ``
})
export class CityAtHomeComponent {

  constructor(private citiesSrvc:CitiesService) {
    console.log("constructor de cityAtHome component")
  }

  getCityAtHome() {
    return this.citiesSrvc.getCityAtHome()
  }
}
