import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/encuestas.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Representa localhost:8080
  baseURL= environment.baseURL;


  private usuario!: Usuario;

  get Usuario() {
    return this.usuario;
  }


  constructor(private http:HttpClient) { }

  get headers(){
    return {headers: {"Content-Type": "application/json"} }
  }


  entrar(dato: any){
    return this.http.post(`${this.baseURL}/api/usuarios/login`,dato,this.headers)
    .pipe(
      tap((data: any) =>{
        // Como hacer que los datos se mantengan aun cuando se refresque la pagina.
        if(data.mensaje=="Se accedió correctamente"){
          localStorage.setItem("token",data.token)
          localStorage.setItem("id",data.id)
          localStorage.setItem("nombre",data.nombre)
          localStorage.setItem("correo",data.correo)
          localStorage.setItem("username",data.username)
          this.usuario=data
          //console.log("soy servicio")
          //console.log(this.Usuario)
        }
      }),
      map(res=>res)
    )
  }


  getToken(){
    return localStorage.getItem("token") || '';
  }

  get headersToken(){
    return {headers: {"Authorization": this.getToken()} }
  }

  verificarToken(): Observable<boolean> {
    return this.http.get(`${this.baseURL}/api/verificar`,this.headersToken).
    pipe(
      map((res:any) => {
        console.log(res)
        return res.ok
      }),
      catchError(err => of(false))
    )
  }

}
