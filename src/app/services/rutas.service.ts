import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  
  private rutas: Rutas []=[
    {
      CiudadOrigen: "Machala",
      CiudadDestino: "El Guabo",
      Precio: "0.80$",
      Descripcion: "Viaje intercantonal corto.",
      Tipo: "Interno"
    },
    {
      CiudadOrigen: "El Guabo",
      CiudadDestino: "Machala",
      Precio: "0.65$",
      Descripcion: "Economicos sin entrar por terminal.",
      Tipo: "Interno"
    },
    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Santa Rosa",
      Precio: "1.00$",
      Descripcion: "Destino con buena comida",
      Tipo: "Interno"
    },
    {
      CiudadOrigen: "Santa Rosa",
      CiudadDestino: "Machala",
      Precio: "0.85$",
      Descripcion: "Descuento para universitarios",
      Tipo: "Interno"
    },
    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Cambio",
      Precio: "0.60$",
      Descripcion: "Viaje corto con pasaje minumo de 60 centavos",
      Tipo: "Interno"
    },
    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Guayaquil",
      Precio: "6.50$",
      Descripcion: "Viaje inter cantonal.",
      Tipo: "Externo"
    },
    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Cuenca",
      Precio: "9.00$",
      Descripcion: "Cambio de clima",
      Tipo: "Externo"
    },
    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Quito",
      Precio: "15.00$",
      Descripcion: "Viaje largo",
      Tipo: "Externo"
    },
    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Cayambe",
      Precio: "8.00$",
      Descripcion: "Deliciosos bizcoches",
      Tipo: "Externo"
    },
    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Galapagos",
      Precio: "150.00$",
      Descripcion: "Viaje a traves del mar.",
      Tipo: "Externo"
    }
  ];
  
  getRutas(){
  return this.rutas;
  }

  getHeroe(idx: number){
    return this.rutas[idx];
  }

  constructor() {
    console.log ("Servicio listo para usar...");
   }
   
}

export interface Rutas{
  CiudadOrigen: string;
  CiudadDestino:string;
  Precio:string;
  Descripcion:string;
  Tipo: string;
}