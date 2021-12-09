import { Component, OnInit } from '@angular/core';
import { Encuestas } from 'src/app/models/encuestas.model';
import { CandidatoService } from 'src/app/service/candidato.service';
import { EncuestaService } from 'src/app/service/encuesta.service';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {

  encuestas: Encuestas[] = [];

  constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {
    this.traerencuestas();
  }

  traerencuestas(){
    this.encuestaService.obtenerEncuestas().subscribe((encuestas:any) =>{
      console.log(encuestas)
      this.encuestas=encuestas;
    })
  }

}
