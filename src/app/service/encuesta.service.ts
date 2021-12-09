import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  baseURL= environment.baseURL;

  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem("token")||'';
  }

  get headers(){
    return {headers: {"Authorization": this.getToken()} }
  }


  obtenerEncuestas(){
    return this.http.get(`${this.baseURL}/api/encuestas`,this.headers)
  }

  agregarEncuesta(data: any){
    return this.http.post(`${this.baseURL}/api/encuestas`,data,this.headers)
  }


}
