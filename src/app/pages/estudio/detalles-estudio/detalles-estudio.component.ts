import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/core/entidades/estudio';
import { EstudioService } from 'src/app/core/servicios/estudio.service';

@Component({
  selector: 'app-detalles-estudio',
  templateUrl: './detalles-estudio.component.html',
  styleUrls: ['./detalles-estudio.component.css']
})
export class DetallesEstudioComponent {

  public estudio :Estudio= new Estudio();

  constructor (private builder:FormBuilder,private router:Router ,private estudioServicio : EstudioService,
    private activateRouter:ActivatedRoute){};
  ngOnInit(): void {
    this.cargarEstudio();
  }

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

}
