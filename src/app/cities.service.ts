import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities:any[] = []
  private cityAtHome:any = {}

  constructor() { }

  addCity(newCity:any) {
    if ( !this.isAlreadyInMyCities(newCity) ) {
      this.cities.push(newCity)
    }
  }

  deleteCity(aCity:any) {
    this.cities = this.cities.filter( c => c.id != aCity.id )
  }

  getCities() {
    return this.cities
  }

  getCityAtHome() {
    return this.cityAtHome
  }

  isAlreadyInMyCities(aCity:any) {
    return this.cities.find( c => c.id == aCity.id )
  }

  setCityAtHome(aCity:any) {
    this.cityAtHome = aCity
  }
}
