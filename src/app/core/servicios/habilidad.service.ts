import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Habilidad } from '../entidades/habilidad';
import { of,Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private urlEndPoint:string= "http://localhost:8080/api/habilidad"
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor(private http:HttpClient) { }

  // Opcion 1 metodo para oobtener los datos de la api 
  getHabilidades():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.urlEndPoint)
  }


// Opcion 2 metodo para obtener los datos de la api  
//   getHabilidades():Observable<Habilidad[]>{
//     return this.http.get(this.urlEndPoint).pipe(
//       map( response  => response as Habilidad[]))
//   }
  crear(habilidad:Habilidad):Observable<Habilidad>{
    return this.http.post<Habilidad>(this.urlEndPoint,habilidad,{headers:this.httpHeaders})
  }

  getHabilidad(id:number):Observable<Habilidad>{

    return this.http.get<Habilidad>(`${this.urlEndPoint}/${id}`)
  }

  actualizarHabilidad(habilidad:Habilidad):Observable<Habilidad>{

    return this.http.put<Habilidad>( `${this.urlEndPoint}/${habilidad.idHabilidad}`,habilidad,{headers:this.httpHeaders})

  }

  borrar(id:number):Observable<Habilidad>{

    return this.http.delete<Habilidad>( `${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})

  }
   
}
