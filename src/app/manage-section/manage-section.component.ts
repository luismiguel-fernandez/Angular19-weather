import { Component } from '@angular/core';
import { CityCardComponent } from '../city-card/city-card.component';
import { CitiesService } from '../cities.service';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-manage-section',
  imports: [CityCardComponent],
  templateUrl: './manage-section.component.html',
  styles: ``
})
export class ManageSectionComponent {
  
  constructor(private citiesSrvc:CitiesService,
              private http:AccesoDatosService) {
    //console.log("constructor del componente Manage Section")
    //actualizar los valores de mis ciudades favoritas
    //recorrer mis ciudades y por cada una de ellas voy a llamar
    //al servidor para recibir info actual
    this.citiesSrvc.getCities().forEach( c => {
      //consulta al servidor para preguntar por la ciudad "c"
      this.http.updateById(c.id).subscribe( 
        json => {
          //recibimos nuevos valores para la ciudad "c"
          // y deben sustituir a mi ciudad "c" obsoleta
          this.citiesSrvc.updateCity(json)
        }
       )
    } )
  }

  getCities() {
    return this.citiesSrvc.getCities()
  }
}
