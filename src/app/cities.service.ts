import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities:any[] = []
  private cityAtHome:any = {}

  constructor() {
    this.cities = JSON.parse( localStorage.getItem("cities") || "[]" )
    this.cityAtHome = JSON.parse( localStorage.getItem("cityAtHome") || "{}" )
  }

  addCity(newCity:any) {
    if ( !this.isAlreadyInMyCities(newCity) ) {
      this.cities.push(newCity)
      this.saveAll()
    }
  }

  deleteCity(aCity:any) {
    this.cities = this.cities.filter( c => c.id != aCity.id )
    this.saveAll()
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

  saveAll() {
    localStorage.setItem("cities",JSON.stringify(this.cities))
    localStorage.setItem("cityAtHome",JSON.stringify(this.cityAtHome))
  }

  setCityAtHome(aCity:any) {
    this.cityAtHome = aCity
    this.saveAll()
  }
}
