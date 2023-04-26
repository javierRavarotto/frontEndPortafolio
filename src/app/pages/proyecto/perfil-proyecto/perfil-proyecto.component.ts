import { Component } from '@angular/core';
import { Proyecto } from 'src/app/core/entidades/proyecto';
import { ProyectoService } from 'src/app/core/servicios/proyecto.service';

@Component({
  selector: 'app-perfil-proyecto',
  templateUrl: './perfil-proyecto.component.html',
  styleUrls: ['./perfil-proyecto.component.css']
})
export class PerfilProyectoComponent {

  proyectos?:Proyecto[];

  constructor(private proyectoSevicio:ProyectoService){}

  ngOnInit(){
    this.proyectoSevicio.getProyectos().subscribe(
      proyectos => this.proyectos=proyectos) 
}

} 
