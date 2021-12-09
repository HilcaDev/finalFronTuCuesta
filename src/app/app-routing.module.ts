import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtegerRutaGuard } from './guards/proteger-ruta.guard';

import { CentralComponent } from './principal/central/central.component';
import { CrearCandidatoComponent } from './principal/crear-candidato/crear-candidato.component';
import { CrearEncuestasComponent } from './principal/crear-encuestas/crear-encuestas.component';
import { ListarCandidatosComponent } from './principal/listar-candidatos/listar-candidatos.component';
import { InicioComponent } from './usuario/inicio/inicio.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

const routes: Routes = [
  {
    path:"",
    component: InicioComponent
  },
  {
    path:"central", // Lo nombro como yo desee
    component: CentralComponent,
    canActivate: [ProtegerRutaGuard],
    canLoad:[ProtegerRutaGuard]

  },
  {
    path:'candidatos',
    component: ListarCandidatosComponent,
    canActivate: [ProtegerRutaGuard],
    canLoad:[ProtegerRutaGuard]

  },
  {
    path:'nuevoCandidato',
    component: CrearCandidatoComponent,
    canActivate: [ProtegerRutaGuard],
    canLoad:[ProtegerRutaGuard]

  },
  {
    path:'nuevaEncuesta',
    component: CrearEncuestasComponent,
    canActivate: [ProtegerRutaGuard],
    canLoad:[ProtegerRutaGuard]

  },
  {
    path:"registrarse", // Lo nombro como yo desee
    component: RegistrarComponent
  },
  {
    path:"login", // Lo nombro como yo desee
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
