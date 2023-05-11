import { Component } from '@angular/core';
import { Proyecto } from 'src/app/core/entidades/proyecto';
import { ProyectoService } from 'src/app/core/servicios/proyecto.service';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  admin:boolean = false
  proyectos?:Proyecto[]; 

  constructor(private proyectoSevicio:ProyectoService,private usuarioServicio : UsuarioService ){}
 
ngOnInit(){
  this.admin = this.usuarioServicio.comprobarAdmin()
  this.proyectoSevicio.getProyectos().subscribe(
    proyectos => this.proyectos=proyectos
  ) 
} 

borrar(proyecto:Proyecto):void{

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro?',
    text: `¿Seguro que desea eliminar el proyecto ${proyecto.nombre}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'si, eliminar',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.proyectoSevicio.borrar(proyecto.idProyecto).subscribe(
        resp =>{
          this.proyectos = this.proyectos?.filter(proye => proye !== proyecto)
          swalWithBootstrapButtons.fire(
            'Proyecto eliminada!',
            `Proyecto ${proyecto.nombre} eliminada con exito `,
            'success'
          )
        }
      )
    
    
    }
  })
}

} 
