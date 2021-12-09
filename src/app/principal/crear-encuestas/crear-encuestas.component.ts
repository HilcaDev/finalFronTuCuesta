import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Candidato, Usuario } from 'src/app/models/encuestas.model';
import { CandidatoService } from 'src/app/service/candidato.service';
import { EncuestaService } from 'src/app/service/encuesta.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-crear-encuestas',
  templateUrl: './crear-encuestas.component.html',
  styleUrls: ['./crear-encuestas.component.css']
})
export class CrearEncuestasComponent implements OnInit {

  candidatos: Candidato[] = [];

  primerCandidato!: Candidato;
  segundoCandidato!: Candidato;


  //usuario: Usuario = this.usuarioService.Usuario;
  usuario: Usuario = {
    id:localStorage.getItem("id")||'',
    nombre:localStorage.getItem("nombre")||'',
    correo:localStorage.getItem("correo")||'',
    username:localStorage.getItem("username")||''
  }

  encuestaForm!: FormGroup;


  constructor(private candidatoService: CandidatoService,
    private usuarioService: UsuarioService,
    private encuestaService: EncuestaService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.encuestaForm = this.fb.group({
      fecha: [''],
      votoscandidato1: [''],
      votoscandidato2: [''],
      candidato1: [this.primerCandidato],
      candidato2: [this.segundoCandidato],
      usuario: [this.usuario]

    })
    console.log("soy crear encuestas")
    console.log(this.usuario)
    this.traerCandidatos()
  }

  traerCandidatos(): void {
    this.candidatoService.obtenerCandidatos().subscribe((candidatos: any) => {
      this.candidatos = candidatos;
    })
  }

  agregar() {
    this.candidatos.forEach((element:any) => {
      if(this.encuestaForm.controls['candidato1'].value==element.id){
        this.primerCandidato=element
        this.encuestaForm.controls['candidato1'].setValue(element)

      }

      if(this.encuestaForm.controls['candidato2'].value==element.id){
        this.segundoCandidato=element
        this.encuestaForm.controls['candidato2'].setValue(element)

      }

    });

    console.log(this.encuestaForm.value)
     this.encuestaService.agregarEncuesta(this.encuestaForm.value).subscribe(data=>{
       console.log(data)
     })

  }

}
