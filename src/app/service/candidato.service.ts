import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private peticion:HttpClient) { }

  // obtiene el token guardado en el local storage, si no se devuelve un string vacio
  getToken(){
    return localStorage.getItem("token")||'';
  }

  //cabecera de la peticio y se envia el token
    get headers(){
      return{headers:{"Authorization":this.getToken()}}
    }

  traerCandidatos(){
    return this.peticion.get("http://localhost:8080/api/candidatos",this.headers)
  }

  guardarCandidato(datos:any){
    return this.peticion.post("http://localhost:8080/api/candidatos",datos)
  }
}
