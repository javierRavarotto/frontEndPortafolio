import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/core/servicios/global.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  @ViewChild('inicio')inicio!:ElementRef;
  @ViewChild('proyecto')proyecto!:ElementRef;
  @ViewChild('habilidad')habilidad!:ElementRef;
  @ViewChild('estudios')estudios!:ElementRef;

  constructor (private globalServicio:GlobalService){
  };

  ngOnInit(): void {
    this.globalServicio.dis.subscribe(lugar =>(this.navegar(lugar)))
  }

  navegar(lugar:any){

    if (lugar=="Proyectos") {
      let proyecto = this.proyecto.nativeElement
      proyecto.scrollIntoView()
    }
    if (lugar=="Habilidad") {
      let habilidad = this.habilidad.nativeElement
      habilidad.scrollIntoView()
    }
    if (lugar=="Estudios") {
      let estudios = this.estudios.nativeElement
      estudios.scrollIntoView()
    }
    if (lugar=="Inicio") {
      let inicio = this.inicio.nativeElement
      inicio.scrollIntoView()
    }
  } 
}

