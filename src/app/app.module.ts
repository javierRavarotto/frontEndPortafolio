import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './features/pages/nav/nav.component';
import { FooterComponent } from './features/pages/footer/footer.component';
import { HabilidadComponent } from './features/pages/habilidad/habilidad.component';
import { FormHabilidadComponent } from './features/pages/habilidad/form-habilidad/form-habilidad.component';
import { HttpClientModule } from '@angular/common/http';
import { HabilidadService } from './core/servicios/habilidad.service';
import { EstudioComponent } from './features/pages/estudio/estudio.component';
import { FormEstudioComponent } from './features/pages/estudio/form-estudio/form-estudio.component';
import { EstudioService } from './core/servicios/estudio.service';
import { ProyectoComponent } from './features/pages/proyecto/proyecto.component';
import { FormProyectoComponent } from './features/pages/proyecto/form-proyecto/form-proyecto.component';
import { PerfilHabilidadComponent } from './features/pages/habilidad/perfil-habilidad/perfil-habilidad.component';
import { PerfilEstudioComponent } from './features/pages/estudio/perfil-estudio/perfil-estudio.component';
import { DetallesEstudioComponent } from './features/pages/estudio/detalles-estudio/detalles-estudio.component';
import { PerfilProyectoComponent } from './features/pages/proyecto/perfil-proyecto/perfil-proyecto.component';
import { DetallesProyectoComponent } from './features/pages/proyecto/detalles-proyecto/detalles-proyecto.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HabilidadComponent,
    FormHabilidadComponent,
    EstudioComponent,
    FormEstudioComponent,
    ProyectoComponent,
    FormProyectoComponent,
    PerfilHabilidadComponent,
    PerfilEstudioComponent,
    DetallesEstudioComponent,
    PerfilProyectoComponent,
    DetallesProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HabilidadService,EstudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
