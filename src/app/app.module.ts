import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HabilidadComponent } from './pages/habilidad/habilidad.component';
import { FormHabilidadComponent } from './pages/habilidad/form-habilidad/form-habilidad.component';
import { HttpClientModule } from '@angular/common/http';
import { HabilidadService } from './core/servicios/habilidad.service';
import { EstudioComponent } from './pages/estudio/estudio.component';
import { FormEstudioComponent } from './pages/estudio/form-estudio/form-estudio.component';
import { EstudioService } from './core/servicios/estudio.service';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { FormProyectoComponent } from './pages/proyecto/form-proyecto/form-proyecto.component';
import { PerfilHabilidadComponent } from './pages/habilidad/perfil-habilidad/perfil-habilidad.component';
import { PerfilEstudioComponent } from './pages/estudio/perfil-estudio/perfil-estudio.component';
import { DetallesEstudioComponent } from './pages/estudio/detalles-estudio/detalles-estudio.component';
import { PerfilProyectoComponent } from './pages/proyecto/perfil-proyecto/perfil-proyecto.component';
import { DetallesProyectoComponent } from './pages/proyecto/detalles-proyecto/detalles-proyecto.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario.component';
import { LoginUsuarioComponent } from './pages/usuario/login-usuario/login-usuario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
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
    DetallesProyectoComponent,
    UsuarioComponent,
    FormUsuarioComponent,
    LoginUsuarioComponent,
    InicioComponent
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
