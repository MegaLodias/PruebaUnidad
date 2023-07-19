import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  rutas:any={};
  constructor(private activatedRoute:
    ActivatedRoute, private _rutasService:RutasService){
    this.activatedRoute.params.subscribe( params =>{
      this.rutas=_rutasService.getHeroe(params['id']);
      console.log(params['id']);
    })
  }
}
