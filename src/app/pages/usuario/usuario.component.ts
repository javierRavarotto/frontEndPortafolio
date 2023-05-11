import { Component } from '@angular/core';
import { Usuario } from 'src/app/core/entidades/usuario';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  admin:boolean = false
  usuarios?:Usuario[];
  constructor(private usuarioServicio : UsuarioService){}
 
ngOnInit(){
    this.admin = this.usuarioServicio.comprobarAdmin()
    this.usuarioServicio.getUsuarios().subscribe(
      usuarios => this.usuarios=usuarios
    ) 
  } 
  
  
  borrar(usuario:Usuario):void{

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar el usuario ${usuario.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioServicio.borrar(usuario.idUsuario).subscribe(
          resp =>{
            this.usuarios = this.usuarios?.filter(user => user !== usuario)
            swalWithBootstrapButtons.fire(
              'Usuario eliminada!',
              `Usuario ${usuario.nombre} eliminada con exito `,
              'success'
            )
          }
        )
      
      
      }
    })
  }

}
