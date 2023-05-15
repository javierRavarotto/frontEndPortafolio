import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Habilidad } from '../entidades/habilidad';
import { of,Observable } from 'rxjs';
import { Url } from '../entidades/Url';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  private urlApi:string= Url.url +"habilidad"
  constructor(private http:HttpClient) { }

  // Opcion 1 metodo para oobtener los datos de la api 
  getHabilidades():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.urlApi)
  }


// Opcion 2 metodo para obtener los datos de la api  
//   getHabilidades():Observable<Habilidad[]>{
//     return this.http.get(this.urlEndPoint).pipe(
//       map( response  => response as Habilidad[]))
//   }
  crear(habilidad:Habilidad):Observable<Habilidad>{
    return this.http.post<Habilidad>(this.urlApi,habilidad,{headers:this.httpHeaders})
  }

  getHabilidad(id:number):Observable<Habilidad>{

    return this.http.get<Habilidad>(`${this.urlApi}/${id}`)
  }

  actualizarHabilidad(habilidad:Habilidad):Observable<Habilidad>{

    return this.http.put<Habilidad>( `${this.urlApi}/${habilidad.idHabilidad}`,habilidad,{headers:this.httpHeaders})

  }

  borrar(id:number):Observable<Habilidad>{

    return this.http.delete<Habilidad>( `${this.urlApi}/${id}`,{headers:this.httpHeaders})

  }
   
}
