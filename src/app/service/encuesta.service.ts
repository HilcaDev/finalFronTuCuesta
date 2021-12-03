import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private peticion: HttpClient) { }

  guardarEncuesta(datos:any){
    return this.peticion.post("http://localhost:8080/api/encuestas",datos)
  }

  traerEncuestas(){
    return this.peticion.get("http://localhost:8080/api/encuestas")
  }

  actualizarEncuesta(info:any){
    return this.peticion.put("http://localhost:8080/api/encuestas",info)
  }

  

}
