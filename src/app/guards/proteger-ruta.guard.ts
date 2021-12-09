import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from '../service/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ProtegerRutaGuard implements CanActivate, CanLoad {

  constructor(private usuarioService: UsuarioService, private router:Router){}

  canActivate(): Observable<boolean> | boolean {
    return this.usuarioService.verificarToken().pipe(
      tap((valido) => {
        if(!valido){
          this.router.navigateByUrl("")
        }
      })
    )
  }

  canLoad(): Observable<boolean> | boolean {
    return this.usuarioService.verificarToken().pipe(
      tap((valido) => {
        if(!valido){
          this.router.navigateByUrl("")
        }
      })
    )
  }
}
