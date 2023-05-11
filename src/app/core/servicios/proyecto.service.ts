import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../entidades/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private urlEndPointRender:string= "https://portafolio-1t4s.onrender.com/api/proyecto"
  private urlEndPoint:string= "http://localhost:8080/api/proyecto"
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor( private http:HttpClient) { }

  getProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.urlEndPointRender)
  }

  crear(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.urlEndPointRender,proyecto,{headers:this.httpHeaders})
  }

  getProyecto(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.urlEndPointRender}/${id}`)
  }

  actualizarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>( `${this.urlEndPointRender}/${proyecto.idProyecto}`,proyecto,{headers:this.httpHeaders})

  }

  borrar(id:number):Observable<Proyecto>{

    return this.http.delete<Proyecto>( `${this.urlEndPointRender}/${id}`,{headers:this.httpHeaders})

  }




}
