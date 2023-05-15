import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../entidades/proyecto';
import { Observable } from 'rxjs';
import { Url } from '../entidades/Url';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
 
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  private urlApi:string= Url.url+"proyecto"
  constructor( private http:HttpClient) { }

  getProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.urlApi)
  }

  crear(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.urlApi,proyecto,{headers:this.httpHeaders})
  }

  getProyecto(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.urlApi}/${id}`)
  }

  actualizarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>( `${this.urlApi}/${proyecto.idProyecto}`,proyecto,{headers:this.httpHeaders})

  }

  borrar(id:number):Observable<Proyecto>{

    return this.http.delete<Proyecto>( `${this.urlApi}/${id}`,{headers:this.httpHeaders})

  }




}
