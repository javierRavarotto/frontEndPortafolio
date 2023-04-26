import { Component } from '@angular/core';
import { Habilidad } from 'src/app/core/interface/habilidad';
import {  HabilidadService } from 'src/app/core/servicios/habilidad.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent {

  habilidades?:Habilidad[];

  constructor(private habilidadSevicio:HabilidadService){}
 
ngOnInit(){
  this.habilidadSevicio.getHabilidades().subscribe(
    habilidades => this.habilidades=habilidades
  ) 
}  

borrar(habilidad:Habilidad):void{

  const swalWithBootstrapButtons = swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro?',
    text: `¿Seguro que desea eliminar la habilidad ${habilidad.nombre}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'si, eliminar',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.habilidadSevicio.borrar(habilidad.idHabilidad).subscribe(
        resp =>{
          this.habilidades = this.habilidades?.filter(habi => habi !== habilidad)
          swalWithBootstrapButtons.fire(
            'Habilidad eliminada!',
            `habilidad ${habilidad.nombre} eliminada con exito `,
            'success'
          )
        }
      )
    
    
    }
  })
}
 


}
