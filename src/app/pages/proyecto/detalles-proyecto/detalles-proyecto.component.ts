import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/core/entidades/proyecto';
import { ProyectoService } from 'src/app/core/servicios/proyecto.service';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.css']
})
export class DetallesProyectoComponent {



  public proyecto :Proyecto= new Proyecto();

  constructor (private builder:FormBuilder,private router:Router ,private proyectoServicio : ProyectoService,
    private activateRouter:ActivatedRoute){};
  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto():void{
    this.activateRouter.params.subscribe(param =>{
      let id = param['id']
      console.log("asdasdasd" + param['id'])
      if(id != undefined){
        console.log("entro")
        this.proyectoServicio.getProyecto(id).subscribe((proyecto => this.proyecto=proyecto)
       
        )
      }
    })}

}
