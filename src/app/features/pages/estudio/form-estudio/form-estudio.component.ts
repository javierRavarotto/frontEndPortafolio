import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/core/interface/estudio';
import { EstudioService } from 'src/app/core/servicios/estudio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-estudio',
  templateUrl: './form-estudio.component.html',
  styleUrls: ['./form-estudio.component.css']
})
export class FormEstudioComponent {


  public estudio :Estudio= new Estudio(); 
  public titulo:String="Crear Estudio"

  

  constructor (private builder:FormBuilder,private router:Router ,private estudioServicio : EstudioService,
    private activateRouter:ActivatedRoute){};
 
  ngOnInit(): void {
    this.cargarEstudio();
  }

  public crear():void{
    this.estudioServicio.crear(this.estudio)
    .subscribe( estudio => {
        this.router.navigate(['/estudio'])
         Swal.fire('Nuevo estudio', `Estudio ${estudio.nombre} creado con exito`,'success')
      } 
    )}

     cargarEstudio():void{
      this.activateRouter.params.subscribe(param =>{
        let id = param['id']
        console.log("asdasdasd" + param['id'])
        if(id != undefined){
          console.log("entro")
          this.estudioServicio.getEstudio(id).subscribe((estudio => this.estudio=estudio)
         
          )
        }
      })}

      actualizarEstudio():void{
          this.estudioServicio.actualizarEstudio(this.estudio).subscribe(estudio =>{
            this.router.navigate(['/estudio'])
            Swal.fire('Estudio ', `Estudio ${estudio.nombre} actualizado con exito`,'success')
          })
      }

}
