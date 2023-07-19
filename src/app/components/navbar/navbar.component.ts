import { Component } from '@angular/core';
import { RutasService, Rutas } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';
  searchResult: Rutas[] = [];

  constructor(private rutasService: RutasService) {}

  buscar() {

    const rutas = this.rutasService.getRutas();
    this.searchResult = rutas.filter((ruta: Rutas) => {
      const ciudadOrigen = ruta.CiudadOrigen.toLowerCase();
      const ciudadDestino = ruta.CiudadDestino.toLowerCase();
      const searchQuery = this.searchQuery.toLowerCase();
  
      return ciudadOrigen.includes(searchQuery) || ciudadDestino.includes(searchQuery);
    });
    
    }

}
