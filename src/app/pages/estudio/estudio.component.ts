import { Component } from '@angular/core';
import { Estudio } from 'src/app/core/entidades/estudio';
import { EstudioService } from 'src/app/core/servicios/estudio.service';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent {
  estudios?:Estudio[];
  admin:boolean = false


  constructor(private estudioSevicio:EstudioService,private usuarioServicio : UsuarioService){}
 
  ngOnInit(){
    this.admin = this.usuarioServicio.comprobarAdmin()
    this.estudioSevicio.getEstudios().subscribe(
      estudios => this.estudios=estudios
    )  
  }


  borrar(estudio:Estudio):void{

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar el estudio  ${estudio.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.estudioSevicio.borrar(estudio.idEstudio).subscribe(
          resp =>{
            this.estudios = this.estudios?.filter(est => est !== estudio)
            swalWithBootstrapButtons.fire(
              'Habilidad eliminada!',
              `habilidad ${estudio.nombre} eliminada con exito `,
              'success'
            )
          }
        )
      
      
      }
    })
  }
  
}
