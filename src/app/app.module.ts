import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { InicioComponent } from './usuario/inicio/inicio.component';
import { CentralComponent } from './principal/central/central.component';
import { CrearCandidatoComponent } from './principal/crear-candidato/crear-candidato.component';
import { ListarCandidatosComponent } from './principal/listar-candidatos/listar-candidatos.component';
import { CrearEncuestasComponent } from './principal/crear-encuestas/crear-encuestas.component';
import { NavComponent } from './shared/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    InicioComponent,
    NavComponent,
    CentralComponent,
    CrearCandidatoComponent,
    ListarCandidatosComponent,
    CrearEncuestasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
