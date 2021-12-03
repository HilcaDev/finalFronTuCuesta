import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private peticion:HttpClient) { }

  registrarUsuarios(datos:any){
    return this.peticion.post("http://localhost:8080/api/usuarios",datos)
  }

  ingresar(datosLogin:any){
    return this.peticion.post("http://localhost:8080/api/usuarios/login",datosLogin)
  }
}
