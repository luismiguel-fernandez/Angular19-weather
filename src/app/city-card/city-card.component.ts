import { Component, Input } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-city-card',
  imports: [],
  templateUrl: './city-card.component.html',
  styles: ``
})
export class CityCardComponent {
  @Input() city:any

  constructor(private citiesSrvc:CitiesService) {}

  deleteCity() {
    this.citiesSrvc.deleteCity(this.city)
  }
}
