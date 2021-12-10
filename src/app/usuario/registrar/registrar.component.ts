import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']

})

export class RegistrarComponent implements OnInit {

  datosUsuario!: FormGroup;

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.datosUsuario=this.fb.group({
      nombre: [''],
      username: [''],
      correo: [''],
      password: ['']
    })
  }

  crearUsuario(){

    //Utilizamos el servicio que importamos
    this.usuarioService.registrarUsuarios(this.datosUsuario.value).subscribe(respuesta => {
      console.log(respuesta)
    })
  }

}

