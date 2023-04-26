import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators ,FormControl,ReactiveFormsModule} from '@angular/forms';
import { HabilidadComponent } from '../habilidad.component';
import { Habilidad } from 'src/app/core/interface/habilidad';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HabilidadService } from 'src/app/core/servicios/habilidad.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form-habilidad',
  templateUrl: './form-habilidad.component.html',
  styleUrls: ['./form-habilidad.component.css']
})
export class FormHabilidadComponent  implements OnInit{
  
  public habilidad : Habilidad= new Habilidad();
  public titulo:String="Crear Hablidad"

  

  constructor (private builder:FormBuilder,private router:Router ,private habilidadServicio : HabilidadService,private activateRouter:ActivatedRoute){
  
 
  };
 
  ngOnInit(): void {
    this.cargarHabilidad();
  }

  public crear():void{
    this.habilidadServicio.crear(this.habilidad)
    .subscribe( habilidad => {
        this.router.navigate(['/habilidad'])
         swal.fire('Nueva habilidad ', `Habiliadad ${habilidad.nombre} creado con exito`,'success')
      } 
    )}

     cargarHabilidad():void{
      this.activateRouter.params.subscribe(param =>{
        let id = param['id']
        if(id){
          this.habilidadServicio.getHabilidad(id).subscribe((habilidad => this.habilidad=habilidad)

          )
        }
      })}

      actualizarHabilidad():void{
          this.habilidadServicio.actualizarHabilidad(this.habilidad).subscribe(habilidad =>{
            this.router.navigate(['/habilidad'])
            swal.fire('Habilidad ', `Habiliadad ${habilidad.nombre} actualizada con exito`,'success')
          })
      }
  }