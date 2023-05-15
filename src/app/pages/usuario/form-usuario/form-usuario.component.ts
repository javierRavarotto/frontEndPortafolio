import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/core/entidades/usuario';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {

  public error:string="";
  public usuario : Usuario= new Usuario();
  public titulo:String="Crear Usuario"

 

  constructor (private builder:FormBuilder,private router:Router ,private usuarioServicio : UsuarioService,private activateRouter:ActivatedRoute){
  };
 
  ngOnInit(): void {
    this.cargarUsuario();
  }

  public crear():void{
    this.usuarioServicio.crear(this.usuario)
    .subscribe( usuario => {
      if(usuario.idUsuario != null){
        this.router.navigate(['/usuario'])
        Swal.fire('Nuevo Usuario ', `Usuario ${usuario.nombre} creado con exito`,'success')
      }else{
        this.error= "El nombre de Usuario ya esta en uso"
      }
        
      } 
    )}

     cargarUsuario():void{
      this.activateRouter.params.subscribe(param =>{
        let id = param['id']
        if(id){
          this.usuarioServicio.getUsuario(id).subscribe((usuario => this.usuario=usuario)

          )
        }
      })}

      actualizarUsuario():void{
          this.usuarioServicio.actualizarUsuario(this.usuario).subscribe(usuario =>{
            this.router.navigate(['/usuario'])
            Swal.fire('Usuario ', `Usuario ${usuario.nombre} actualizada con exito`,'success')
          })
      }
}
