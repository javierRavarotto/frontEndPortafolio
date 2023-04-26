import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/core/interface/proyecto';
import { ProyectoService } from 'src/app/core/servicios/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent {
 

  
  public proyecto : Proyecto= new Proyecto();
  public titulo:String="Crear Proyecto"

  

  constructor (private builder:FormBuilder,private router:Router ,private proyectoServicio : ProyectoService,private activateRouter:ActivatedRoute){
  };
 
  ngOnInit(): void {
    this.cargarProyecto();
  }

  public crear():void{
    this.proyectoServicio.crear(this.proyecto)
    .subscribe( proyecto => {
        this.router.navigate(['/proyecto'])
         Swal.fire('Nuevo Proyecto ', `Proyecto ${proyecto.nombre} creado con exito`,'success')
      } 
    )}

     cargarProyecto():void{
      this.activateRouter.params.subscribe(param =>{
        let id = param['id']
        if(id){
          this.proyectoServicio.getProyecto(id).subscribe((proyecto => this.proyecto=proyecto)

          )
        }
      })}

      actualizarProyecto():void{
          this.proyectoServicio.actualizarProyecto(this.proyecto).subscribe(proyecto =>{
            this.router.navigate(['/proyecto'])
            Swal.fire('Proyecto ', `Proyecto ${proyecto.nombre} actualizada con exito`,'success')
          })
      }

}
