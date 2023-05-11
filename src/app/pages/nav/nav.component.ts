import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/entidades/usuario';
import { GlobalService } from 'src/app/core/servicios/global.service';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @ViewChild('inicio') inicio!: ElementRef;
  @ViewChild('proyecto') proyecto!: ElementRef;
  @ViewChild('estudios') estudios!: ElementRef;
  @ViewChild('habilidad') habilidad!: ElementRef;
  usuario: Usuario = new Usuario();
  admin: boolean = false
  constructor(private usuarioServicio: UsuarioService, private router: Router, private globalServicio: GlobalService) {
  };
  ngOnInit(): void {
    this.usuario = this.usuarioServicio.ObtenerusuarioStorage()
    if (this.usuario.admin && this.usuario != null) {
      this.admin = true
      this.router.navigate(["/"])
    } else if (this.usuario != null) {
      this.router.navigate(["/"])

    } else {
      this.router.navigate(["/inisioSesion"])
    }
  }
  cerrarSesion() {
    localStorage.removeItem("usuario")
    this.usuario = this.usuarioServicio.ObtenerusuarioStorage()
    window.location.reload();
  }
  navInicio() {
    this.globalServicio.dis.emit(this.inicio.nativeElement.innerText)
  }
  navProyecto() {
    this.globalServicio.dis.emit(this.proyecto.nativeElement.innerText)
  }
  navEstudios() {
    this.globalServicio.dis.emit(this.estudios.nativeElement.innerText)
  }
  navHanilidad() {
    this.globalServicio.dis.emit(this.habilidad.nativeElement.innerText)
  }

}
