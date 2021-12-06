import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { InicioComponent } from './usuario/inicio/inicio.component';
import { CentralComponent } from './principal/central/central.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    InicioComponent,
    CentralComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
