import { Component } from '@angular/core';
import { Habilidad } from 'src/app/core/interface/habilidad';
import { HabilidadService } from 'src/app/core/servicios/habilidad.service';

@Component({
  selector: 'app-perfil-habilidad',
  templateUrl: './perfil-habilidad.component.html',
  styleUrls: ['./perfil-habilidad.component.css']
})



export class PerfilHabilidadComponent {

  habilidades?:Habilidad[];

  constructor(private habilidadSevicio:HabilidadService){}

  ngOnInit(){
    this.habilidadSevicio.getHabilidades().subscribe(
      habilidades => this.habilidades=habilidades
    ) 
  } 

}
