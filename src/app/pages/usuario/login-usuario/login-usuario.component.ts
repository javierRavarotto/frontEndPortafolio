import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Usuario } from 'src/app/core/entidades/usuario';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  public error:string="";
  public usuario : Usuario= new Usuario();
  public titulo:String="Iniciar sesion"

  constructor (private builder:FormBuilder,private router:Router ,private usuarioServicio : UsuarioService,private activateRouter:ActivatedRoute){
  };
 
  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario():void{
    this.activateRouter.params.subscribe(param =>{
      let id = param['id']
      if(id){
        this.usuarioServicio.getUsuario(id).subscribe((usuario => this.usuario=usuario)

        )
      }
    })}

  inicioSesion(){
    this.usuarioServicio.inicioSesion(this.usuario).subscribe(data=>{
      try {
      
        if(data.idUsuario != null){
          data.contrasena="*****"
          localStorage.setItem("usuario",JSON.stringify(data) )
          window.location.reload();
        }else{
          this.error= "Usuario o contraseña incorrecta"
        }
      } catch (error) {
        console.log("esto asdasd")
      }
      
      
      })
  
   
  }


}
