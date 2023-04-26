import { Component } from '@angular/core';
import { Estudio } from 'src/app/core/entidades/estudio';
import { EstudioService } from 'src/app/core/servicios/estudio.service';

@Component({
  selector: 'app-perfil-estudio',
  templateUrl: './perfil-estudio.component.html',
  styleUrls: ['./perfil-estudio.component.css']
})
export class PerfilEstudioComponent {


  estudios?:Estudio[];

  constructor(private estudioSevicio:EstudioService){}

  ngOnInit(){
    this.estudioSevicio.getEstudios().subscribe(
      estudios => this.estudios=estudios) 
}
}