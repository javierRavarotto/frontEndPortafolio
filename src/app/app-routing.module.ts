import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHabilidadComponent } from './features/pages/habilidad/form-habilidad/form-habilidad.component';
import { HabilidadComponent } from './features/pages/habilidad/habilidad.component';
import { EstudioComponent } from './features/pages/estudio/estudio.component';
import { FormEstudioComponent } from './features/pages/estudio/form-estudio/form-estudio.component';
import { ProyectoComponent } from './features/pages/proyecto/proyecto.component';
import { FormProyectoComponent } from './features/pages/proyecto/form-proyecto/form-proyecto.component';
import { PerfilHabilidadComponent } from './features/pages/habilidad/perfil-habilidad/perfil-habilidad.component';
import { PerfilEstudioComponent } from './features/pages/estudio/perfil-estudio/perfil-estudio.component';
import { DetallesEstudioComponent } from './features/pages/estudio/detalles-estudio/detalles-estudio.component';
import { PerfilProyectoComponent } from './features/pages/proyecto/perfil-proyecto/perfil-proyecto.component';
import { DetallesProyectoComponent } from './features/pages/proyecto/detalles-proyecto/detalles-proyecto.component';

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
  {path: 'proyecto/detalles/:id', component: DetallesProyectoComponent
}, 
  // {path: '', component: PerfilHabilidadComponent}, 

  // {path: '', component: PerfilEstudioComponent}, 
  {path: '', component: PerfilProyectoComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
