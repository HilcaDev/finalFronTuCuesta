import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private peticion:HttpClient) { }

  get headers(){
      return {headers: {"Content-Type": "application/json"} }
    }

  registrarUsuarios(datos:any){
    return this.peticion.post("http://localhost:8080/api/usuarios",datos,this.headers)
  }

  ingresar(datosLogin:any){
    return this.peticion.post("http://localhost:8080/api/usuarios/login",datosLogin)
    .pipe(
      //Permite obtener la info antes de enviarla a los componentes
      tap((respuesta:any) => {
        if(respuesta.mensaje=="Se accedió correctamente"){
          localStorage.setItem("token",respuesta.hash);
        }
      }),
      map(respuesta => respuesta)
    )
  }
}
