import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicioForm!: FormGroup;
  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inicioForm=this.fb.group({
      username:[''],
      password:['']
    })
  }

  entrar(){
    this.usuarioService.ingresar(this.inicioForm.value).subscribe(data => {
      console.log(data)
    })
  }

}
