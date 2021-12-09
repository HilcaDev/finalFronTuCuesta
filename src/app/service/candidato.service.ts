import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  baseURL= environment.baseURL;

  constructor(private http:HttpClient) { }

  // obtiene el token guardado en el local storage, si no se devuelve un string vacio
  getToken(){
    return localStorage.getItem("token")||'';
  }

  //cabecera de la peticio y se envia el token
  get headers(){
    return{headers:{"Authorization":this.getToken()}}
  }

  obtenerCandidatos(){
    return this.http.get(`${this.baseURL}/api/candidatos`, this.headers)
  }

  añadirCandidato(data:any){
    return this.http.post(`${this.baseURL}/api/candidatos`,data, this.headers)
  }

}
