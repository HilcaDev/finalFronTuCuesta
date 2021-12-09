import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/models/candidato.model';
import { CandidatoService } from 'src/app/service/candidato.service';

@Component({
  selector: 'app-crear-candidato',
  templateUrl: './crear-candidato.component.html',
  styleUrls: ['./crear-candidato.component.css']
})
export class CrearCandidatoComponent implements OnInit {


  CandidatoForm!: FormGroup;
  constructor(private candidatoService: CandidatoService,
    private fb:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.CandidatoForm = this.fb.group({
      id:[""],
      nombre:[""]
    })
  }

  agregar(){
    this.candidatoService.añadirCandidato(this.CandidatoForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.estado=="true"){
   this.router.navigateByUrl("candidatos")
      }else{
        alert("Ha ocurrido un error")
      }
    })
  }

}
