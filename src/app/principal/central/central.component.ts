import { Component, OnInit } from '@angular/core';
import { CandidatoService } from 'src/app/service/candidato.service';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.consumirCandidato()
  }

  consumirCandidato(){
    return this.candidatoService.traerCandidatos().subscribe(respuesta => {
      console.log(respuesta)
    })
  }

}
