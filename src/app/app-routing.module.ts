import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralComponent } from './principal/central/central.component';
import { InicioComponent } from './usuario/inicio/inicio.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

const routes: Routes = [
  {
    path:"",
    component: InicioComponent
  },
  {
    path:"registrarse", // Lo nombro como yo desee
    component: RegistrarComponent
  },
  {
    path:"login", // Lo nombro como yo desee
    component: LoginComponent
  },
  {
    path:"central", // Lo nombro como yo desee
    component: CentralComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
