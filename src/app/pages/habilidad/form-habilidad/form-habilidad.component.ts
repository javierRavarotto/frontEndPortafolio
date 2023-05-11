import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators ,FormControl,ReactiveFormsModule} from '@angular/forms';
import { HabilidadComponent } from '../habilidad.component';
import { Habilidad } from 'src/app/core/entidades/habilidad';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HabilidadService } from 'src/app/core/servicios/habilidad.service';
import swal from 'sweetalert2'
import { ImgbbService } from 'src/app/core/servicios/imgbb.service';

@Component({
  selector: 'app-form-habilidad',
  templateUrl: './form-habilidad.component.html',
  styleUrls: ['./form-habilidad.component.css']
})
export class FormHabilidadComponent  implements OnInit{
  
  public habilidad : Habilidad= new Habilidad();
  public titulo:String="Crear Hablidad"
  public archivosCapturados:any=[]
  

  constructor (private builder:FormBuilder,private router:Router ,private imgbbservicio:ImgbbService,private habilidadServicio : HabilidadService,private activateRouter:ActivatedRoute){
  
 
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
      capturar(event:any):any{
        const capturado = event.target.files[0]
        this.archivosCapturados.push(capturado)
        this.imgbbservicio.uploadImage(capturado).subscribe(data=> this.habilidad.urlImagen=data.data.display_url)
      }
  }