import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicioForm!: FormGroup;

  constructor(
    private usuarioService: UsuarioService, 
    private fb: FormBuilder,
    private router:Router){ }

  ngOnInit(): void {
    this.inicioForm = this.fb.group({
      username:[''],
      password:['']
    })
  }

  entrar(){
    this.usuarioService.ingresar(this.inicioForm.value).subscribe((data:any) => {
      console.log(data)
      if(data.mensaje=="Se accedió correctamente"){
        this.router.navigateByUrl("central")
      }else{
        alert(data.mensaje)
      }
    })
  }

}

