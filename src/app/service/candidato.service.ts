import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private peticion:HttpClient) { }

  traerCandidatos(){
    return this.peticion.get("http://localhost:8080/api/candidatos")
  }

  guardarCandidato(datos:any){
    return this.peticion.post("http://localhost:8080/api/candidatos",datos)
  }
}
