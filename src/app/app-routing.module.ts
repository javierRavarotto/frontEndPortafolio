import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHabilidadComponent } from './pages/habilidad/form-habilidad/form-habilidad.component';
import { HabilidadComponent } from './pages/habilidad/habilidad.component';
import { EstudioComponent } from './pages/estudio/estudio.component';
import { FormEstudioComponent } from './pages/estudio/form-estudio/form-estudio.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { FormProyectoComponent } from './pages/proyecto/form-proyecto/form-proyecto.component';
import { PerfilHabilidadComponent } from './pages/habilidad/perfil-habilidad/perfil-habilidad.component';
import { PerfilEstudioComponent } from './pages/estudio/perfil-estudio/perfil-estudio.component';
import { DetallesEstudioComponent } from './pages/estudio/detalles-estudio/detalles-estudio.component';
import { PerfilProyectoComponent } from './pages/proyecto/perfil-proyecto/perfil-proyecto.component';
import { DetallesProyectoComponent } from './pages/proyecto/detalles-proyecto/detalles-proyecto.component';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { LoginUsuarioComponent } from './pages/usuario/login-usuario/login-usuario.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: 'habilidad', component: HabilidadComponent},
  {path: 'habilidad/crear', component: FormHabilidadComponent},
  {path: 'habilidad/editar/:id', component: FormHabilidadComponent}, 
  {path: 'estudio', component: EstudioComponent},
  {path: 'estudio/crear', component: FormEstudioComponent},
  {path: 'estudio/editar/:id', component: FormEstudioComponent}, 
  {path: 'estudio/detalles/:id', component: DetallesEstudioComponent}, 
  {path: 'proyecto', component: ProyectoComponent},
  {path: 'proyecto/crear', component: FormProyectoComponent},
  {path: 'proyecto/editar/:id', component: FormProyectoComponent}, 
  {path: 'proyecto/detalles/:id', component: DetallesProyectoComponent}, 
  {path: '', component: InicioComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'usuario/crear', component: FormUsuarioComponent},
  {path: 'usuario/editar/:id', component: FormUsuarioComponent},
  {path: 'inicioSesion', component: LoginUsuarioComponent},
  {path: 'inicioSesion/:nombre', component: LoginUsuarioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
