import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../interface/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private urlEndPoint:string= "http://localhost:8080/api/proyecto"
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor( private http:HttpClient) { }

  getProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.urlEndPoint)
  }

  crear(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.urlEndPoint,proyecto,{headers:this.httpHeaders})
  }

  getProyecto(id:number):Observable<Proyecto>{
 
    return this.http.get<Proyecto>(`${this.urlEndPoint}/${id}`)
  }

  actualizarProyecto(proyecto:Proyecto):Observable<Proyecto>{

    return this.http.put<Proyecto>( `${this.urlEndPoint}/${proyecto.idProyecto}`,proyecto,{headers:this.httpHeaders})

  }

  borrar(id:number):Observable<Proyecto>{

    return this.http.delete<Proyecto>( `${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})

  }




}
