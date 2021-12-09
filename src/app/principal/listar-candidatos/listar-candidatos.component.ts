import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/models/candidato.model';
import { CandidatoService } from 'src/app/service/candidato.service';

@Component({
  selector: 'app-listar-candidatos',
  templateUrl: './listar-candidatos.component.html',
  styleUrls: ['./listar-candidatos.component.css']
})
export class ListarCandidatosComponent implements OnInit {

  candidatos: Candidato[] = [];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.traerCandidatos()
  }

  traerCandidatos(): void {
    this.candidatoService.obtenerCandidatos().subscribe((candidato: any) => {
     this.candidatos = candidato;
     console.log(candidato)
    })
  }

}
